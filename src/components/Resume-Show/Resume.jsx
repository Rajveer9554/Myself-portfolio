import React, { useEffect } from "react";

export default function Resume() {
  const resumeUrl = `${import.meta.env.BASE_URL}rajveer_resume.pdf`;

  // Page load hone pe top par scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Header with download/open options */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">My Resume</h1>
        <div className="flex gap-2">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 text-sm border rounded hover:bg-gray-100 dark:hover:bg-neutral-800"
          >
            Open in New Tab
          </a>
          <a
            href={resumeUrl}
            download
            className="px-3 py-1.5 text-sm border rounded hover:bg-gray-100 dark:hover:bg-neutral-800"
          >
            Download
          </a>
        </div>
      </div>

      {/* Resume PDF Preview */}
      <div className="max-w-6xl mx-auto px-4 pb-6">
        <div className="h-[80vh] rounded-xl overflow-hidden border bg-white dark:bg-neutral-900">
          <iframe
            src={resumeUrl}
            title="Resume"
            className="w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}
