import React from 'react'
import { Shield, Cookie } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
const page = () => {
  return (
    <div className='flex min-h-screen justify-center items-center mt-12'>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-500 mr-2" />
                  Privacy Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  At Infotact, we prioritize your privacy and are committed to protecting your personal
                  information. We collect, store, and process your data solely to enhance your learning experience, such
                  as managing user accounts, providing personalized content, and improving our platform's functionality.
                  Your information will never be shared with third parties without your consent, except as required by
                  law. By using our platform, you agree to our data collection practices, which adhere to stringent
                  security protocols to safeguard your information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cookie className="h-6 w-6 text-blue-500 mr-2" />
                  Cookie Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Our platform uses cookies to provide a seamless and personalized user experience. Cookies help us
                  analyze website traffic, save your preferences, and deliver relevant content tailored to your
                  interests. By continuing to browse our site, you consent to the use of cookies. You can manage or
                  disable cookies through your browser settings, but this may impact the functionality of certain
                  features on our platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page
