/**
 * Calls the Anthropic Claude API from the browser.
 * The API key is handled automatically by Claude.ai's artifact environment.
 */
export async function callClaude(prompt) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1500,
      messages: [{ role: "user", content: prompt }]
    })
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`API error ${response.status}: ${err}`);
  }

  const data = await response.json();
  const text = data.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("");

  // Strip any accidental markdown fences
  const clean = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
  return JSON.parse(clean);
}

/**
 * Builds the monetization analysis prompt from form data.
 */
export function buildPrompt(form) {
  return `You are a startup advisor helping students monetize their projects.

Project details:
- Name: ${form.name}
- Description: ${form.description}
- Category: ${form.category}
- Stage: ${form.stage}
- Skills/Tech: ${form.skills || "Not specified"}

Respond ONLY with a valid JSON object. No markdown, no backticks, no explanation before or after. Just raw JSON like this:
{"summary":"...","potential_score":7,"potential_label":"High","monetization_paths":[{"title":"...","type":"SaaS","description":"...","effort":"Medium","timeline":"2-4 weeks","earning_potential":"$500-$2000/month"}],"target_users":[{"segment":"...","description":"...","where_to_find":"..."}],"pricing_ideas":[{"model":"Freemium","structure":"...","suggested_price":"$9/month"}],"quick_wins":["...","...","..."],"platforms_to_launch":["Product Hunt","Fiverr"],"risks":["...","..."]}`;
}
