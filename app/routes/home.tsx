import { resumes } from "../../constants";
import type { Route } from "./+types/home";
import Navbar from "~/componets/Navbar";
import ResumeCard from "~/componets/ResumeCard";
import {Link, useNavigate} from "react-router";
import {useEffect, useState} from "react";
import { usePuterStore } from "~/lib/puter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
 const { auth } = usePuterStore();
  const navigate = useNavigate();
  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings!</h1>
        <h2>Review your submissions and check AI-powerd feedback.</h2>
      </div>
    {resumes.length > 0 && ( 
      <div className="resumes-section flex flex-wrap gap-3 justify-center px-6">
        {resumes.map((resumes) => (
          <ResumeCard key={resumes.id} resume={resumes} />
        ))}

      </div>
    )}
    </section>
  </main>
}
