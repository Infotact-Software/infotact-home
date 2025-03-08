"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

export default function VerifyPage() {
  const [empId, setEmpId] = useState("")
  const [verificationResult, setVerificationResult] = useState<"success" | "error" | null>(null)
  const [isLoading, setIsLoading] = useState(false);
  interface CertificateData {
    trurl: CertificateData | null
    ccurl: string;
    // Add other properties if needed
  }

  const [data, setData] = useState<CertificateData | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulating API call
    let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/certificate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id:empId }),
    })
    let resdata = await res.json();
    setIsLoading(false)
    if(resdata.success){
      setData(resdata.data[0]);
      setVerificationResult("success");
    }
    else{
      setVerificationResult("error");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <img src="/white.png" alt="SaaSCo Logo" className="w-24 h-24 mx-auto mb-4 " />
          <h1 className="text-3xl font-bold text-gray-800 mb-2 roboto-bold">Certificate Verification</h1>
          <p className="text-gray-600 ">Enter your Employee ID to verify and download your internship certificate.</p>
        </div>

        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="empId" className="block text-sm font-medium text-gray-700 mb-1">
                Employee ID
              </label>
              <input
                type="text"
                id="empId"
                value={empId}
                onChange={(e) => setEmpId(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Employee ID"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {isLoading ? <Loader2 className="animate-spin mx-auto" /> : "Verify & Download Certificate"}
            </button>
          </form>

          {verificationResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`mt-4 p-4 rounded-md ${
                verificationResult === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {verificationResult === "success" ? (
                <>
                  <h3 className="font-semibold mb-2">Verification Successful!</h3>
                  <p>Your internship certificate is ready for download.</p>
                  <button className="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out" onClick={()=>{
                    window.open(`${data&&data.ccurl}`);
                  }}>
                    Download Completion Certificate
                  </button>
                  <button className="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out" onClick={()=>{
                    window.open(`${data&&data.trurl}`);
                  }}>
                    Download Training Certificate
                  </button>
                </>
              ) : (
                <>
                  <h3 className="font-semibold mb-2">Verification Failed</h3>
                  <p>We couldn't find a certificate for the provided Employee ID. Please check and try again.</p>
                </>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

