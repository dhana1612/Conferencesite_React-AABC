import React, { useState } from "react";

export default function PaperSubmission() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-gray-100 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Paper Submission
        </h2>

        {/* Submission Guidelines */}
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">
          Submission Guidelines
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Authors are invited to submit **original, unpublished research papers** 
          that demonstrate innovation and contribute to the advancement of 
          knowledge in integrated circuits and systems. All submissions must 
          strictly adhere to the IEEE conference formatting requirements.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Papers should be formatted in **IEEE double-column style**, using 
          <strong>Times New Roman, 10pt font</strong>. The maximum length 
          allowed is **6 pages**, including all references and appendices.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Submissions should be in **PDF or DOCX format** and should not 
          contain any author-identifying information to maintain **double-blind 
          peer review** integrity. The review process will evaluate papers based 
          on their originality, technical quality, relevance, and clarity of 
          presentation.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          Accepted papers will be presented at the conference and published in 
          **IEEE Xplore**. Authors must register for the conference to present 
          their work. Failure to present the paper may result in removal from 
          the conference proceedings.
        </p>

        {/* Important Notes */}
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">
          Important Notes
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          - <strong>Submission Deadline:</strong> All papers must be submitted 
          by <strong>October 1, 2025</strong>. Late submissions will **not** be 
          accepted under any circumstances.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          - <strong>Plagiarism Policy:</strong> All submissions will be 
          **checked for plagiarism** using IEEE-approved tools. Papers 
          containing more than **20% similarity** with existing work will be 
          **automatically rejected**.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          - <strong>Author Registration:</strong> At least one author must 
          register for the conference by **October 15, 2025**, to be included 
          in the final program and proceedings.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-12">
          - <strong>Presentation Mode:</strong> Accepted papers must be 
          presented in **person or virtually**. Authors unable to attend must 
          notify the organizers in advance to arrange an alternative presentation.
        </p>

        {/* Submit Paper Button */}
        <div className="text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-green-800 transition-transform transform hover:scale-105"
          >
            Submit Your Paper
          </button>
        </div>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg relative overflow-y-auto max-h-[90vh]">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Submit Your Paper
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-semibold">
                  Paper Title *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">
                  Author Full Name *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">
                  Author Email *
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-3"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">
                  Author Institution *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">
                  Author Category *
                </label>
                <select className="w-full border border-gray-300 rounded-lg p-3">
                  <option>-- Select Category --</option>
                  <option>Student</option>
                  <option>Faculty</option>
                  <option>Industry</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">
                  Upload Paper (PDF/DOC) *
                </label>
                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-lg p-3"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-3 mt-6">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                >
                  Submit Paper
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full md:w-auto text-red-600 font-semibold px-8 py-3 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}