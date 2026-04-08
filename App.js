import React, { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import LoadingScreen from "./components/LoadingScreen";
import ResultReport from "./components/ResultReport";
import { callClaude, buildPrompt } from "./api";
import { LOADING_MESSAGES } from "./constants";
import "./App.css";

const EMPTY_FORM = { name: "", description: "", category: "", stage: "", skills: "" };

export default function App() {
  const [step, setStep] = useState("form"); // form | loading | result
  const [form, setForm] = useState(EMPTY_FORM);
  const [result, setResult] = useState(null);
  const [loadingMsg, setLoadingMsg] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    if (!form.name || !form.description || !form.category || !form.stage) return;
    setError("");
    setStep("loading");

    let i = 0;
    setLoadingMsg(LOADING_MESSAGES[0]);
    const interval = setInterval(() => {
      i = Math.min(i + 1, LOADING_MESSAGES.length - 1);
      setLoadingMsg(LOADING_MESSAGES[i]);
    }, 1800);

    try {
      const parsed = await callClaude(buildPrompt(form));
      clearInterval(interval);
      setResult(parsed);
      setStep("result");
    } catch (e) {
      clearInterval(interval);
      console.error(e);
      setError(e.message || "Something went wrong. Please try again.");
      setStep("form");
    }
  }

  function handleReset() {
    setStep("form");
    setResult(null);
    setError("");
    setForm(EMPTY_FORM);
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        {step === "form" && (
          <ProjectForm
            form={form}
            setForm={setForm}
            onSubmit={handleSubmit}
            error={error}
          />
        )}
        {step === "loading" && <LoadingScreen message={loadingMsg} />}
        {step === "result" && result && (
          <ResultReport result={result} form={form} onReset={handleReset} />
        )}
      </div>
    </div>
  );
}
