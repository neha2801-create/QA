// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedRequirement, setSelectedRequirement] = useState(null);
  
  // Job Description
  const jobDescription = {
    title: "QA Automation Engineer",
    company: "Lucid Motors",
    description: "We are looking for a highly skilled QA Automation Engineer with expertise in Python and the Appium client for automation. The successful candidate will have significant experience in test automation for mobile applications on Android and iOS, as well as web applications. The role requires proficiency in building test automation frameworks, collaborating with cross-functional teams, and ensuring thorough testing to deliver high-quality products."
  };
  
  // Key Requirements with detailed matching from your resume
  const requirements = [
    {
      id: 1,
      title: "Python Appium Client Expertise",
      description: "Hands-on experience with Python Appium client for automation.",
      matchPercentage: 67,
      matches: [
        {
          company: "Innovative Health Systems",
          position: "Frontend Developer and QA Automation Engineer",
          point: "Created 20+ manual and 15 automated test scripts with Python Appium client for cross-platform testing, increasing test coverage by 25%"
        },
        {
          company: "Accenture",
          position: "Senior Quality Assurance Engineer",
          point: "Led mobile UI testing using Python Appium client for Android and iOS platforms, reducing crash rates by 25%"
        }
      ]
    },
    {
      id: 2,
      title: "Mobile App Testing",
      description: "Strong experience in test automation for Android and iOS mobile applications, including using Xcode simulators and Android emulators.",
      matchPercentage: 100,
      matches: [
        {
          company: "Innovative Health Systems",
          position: "Frontend Developer and QA Automation Engineer",
          point: "Utilized Xcode simulators and Android emulators to test application functionality across various device configurations"
        },
        {
          company: "Accenture",
          position: "Senior Quality Assurance Engineer",
          point: "Led mobile UI testing using Python Appium client for Android and iOS platforms, reducing crash rates by 25%"
        },
        {
          company: "Accenture",
          position: "Senior Quality Assurance Engineer",
          point: "Conducted extensive testing on Xcode simulators and Android emulators to verify cross-platform compatibility"
        },
        {
          company: "Accenture",
          position: "Senior Quality Assurance Engineer",
          point: "Performed in-vehicle testing for mobile app integration with automotive systems, verifying proper data synchronization"
        }
      ]
    },
    {
      id: 3,
      title: "Test Automation Frameworks",
      description: "Proven ability to design and implement effective Test Automation Frameworks.",
      matchPercentage: 67,
      matches: [
        {
          company: "Innovative Health Systems",
          position: "Frontend Developer and QA Automation Engineer",
          point: "Developed and executed Python-based test automation framework for medical web application using Appium for mobile testing and Selenium for web testing"
        },
        {
          company: "Kaizen Technologies",
          position: "Software Quality Engineer Intern",
          point: "Designed and implemented Test Automation Frameworks using Python for Automated Trading application, ensuring reusability and maintainability"
        }
      ]
    },
    {
      id: 4,
      title: "Test Planning & Strategy",
      description: "Strong expertise in Test Planning, Test Estimation, Test Strategy, and conducting Risk Assessments.",
      matchPercentage: 33,
      matches: [
        {
          company: "Kaizen Technologies",
          position: "Software Quality Engineer Intern",
          point: "Collaborated in cross-functional teams to create comprehensive Test Plans, Test Estimation, and Test Strategy documents"
        }
      ]
    },
    {
      id: 5,
      title: "Vehicle Testing",
      description: "Familiarity with connected car systems and experience in testing mobile apps with in-car integrations such as Bluetooth, mobile key, and other automotive features.",
      matchPercentage: 100,
      matches: [
        {
          company: "Accenture",
          position: "Senior Quality Assurance Engineer",
          point: "Performed in-vehicle testing for mobile app integration with automotive systems, verifying proper data synchronization"
        },
        {
          company: "Accenture",
          position: "Senior Quality Assurance Engineer",
          point: "Tested Bluetooth connectivity between mobile applications and in-car entertainment systems across multiple device models"
        },
        {
          company: "Accenture",
          position: "Senior Quality Assurance Engineer",
          point: "Verified functionality of mobile key features and other vehicle-related integrations through comprehensive test scenarios"
        },
        {
          company: "Accenture",
          position: "Senior Quality Assurance Engineer",
          point: "Developed automated test scripts for connected car systems using Python and Appium, improving test efficiency by 20%"
        }
      ]
    }
  ];
  
  // Calculate overall match percentage
  const overallMatch = Math.round(
    requirements.reduce((sum, req) => sum + req.matchPercentage, 0) / requirements.length
  );
  
  // Keyword matches
  const keywordMatches = [
    { keyword: "Python", count: 8, importance: 5 },
    { keyword: "Appium", count: 6, importance: 5 },
    { keyword: "Mobile Testing", count: 5, importance: 5 },
    { keyword: "Test Automation", count: 7, importance: 5 },
    { keyword: "iOS/Android", count: 4, importance: 4 },
    { keyword: "Test Framework", count: 3, importance: 4 },
    { keyword: "Simulators/Emulators", count: 3, importance: 4 },
    { keyword: "Defect Management", count: 3, importance: 3 },
    { keyword: "CI/CD", count: 2, importance: 3 },
    { keyword: "Bluetooth", count: 2, importance: 2 },
    { keyword: "In-Vehicle Testing", count: 2, importance: 4 },
    { keyword: "Test Strategy", count: 2, importance: 3 }
  ];
  
  // This is the updated pie chart implementation for the renderOverview function

const renderOverview = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">Overall Resume Match</h2>
      <div className="w-full max-w-md h-64 flex items-center justify-center">
        <div className="relative w-40 h-40">
          {/* Pie chart using conic gradient for accurate percentage representation */}
          <div 
            className="absolute inset-0 rounded-full" 
            style={{ 
              background: `conic-gradient(#3B82F6 0% ${overallMatch}%, #E5E7EB ${overallMatch}% 100%)`,
              transform: 'rotate(-180deg)' // Start from top (12 o'clock position)
            }}
          ></div>
          {/* Inner white circle to create donut chart effect */}
          <div className="absolute rounded-full bg-white" style={{ 
            top: '25%', 
            left: '25%', 
            right: '25%', 
            bottom: '25%'
          }}></div>
          {/* Percentage text in the center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold">{overallMatch}%</span>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4 text-center">Requirement Matches</h3>
        <div className="w-full">
          {requirements.map((req) => (
            <div key={req.id} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{req.title}</span>
                <span className="text-sm font-medium">{req.matchPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${req.matchPercentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
  
  const renderKeywords = () => {
    return (
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Keyword Analysis</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Keyword</th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Importance</th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Occurrences</th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {keywordMatches.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm">{item.keyword}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm">
                    {'★'.repeat(item.importance)}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm">{item.count}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${item.count > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {item.count > 0 ? 'Present' : 'Missing'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  const renderRequirements = () => {
    return (
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Detailed Requirement Matching</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Key Requirements</h3>
              <ul className="divide-y">
                {requirements.map((req) => (
                  <li 
                    key={req.id} 
                    className={`py-3 cursor-pointer transition-colors hover:bg-blue-50 ${selectedRequirement?.id === req.id ? 'bg-blue-100' : ''}`}
                    onClick={() => setSelectedRequirement(req)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{req.title}</p>
                        <p className="text-sm text-gray-600">{req.description}</p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <span className={`inline-block rounded-full px-2 py-1 text-xs font-bold ${getMatchColor(req.matchPercentage)}`}>
                          {req.matchPercentage}%
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                {selectedRequirement 
                  ? `Your Experience: ${selectedRequirement.title}` 
                  : 'Select a requirement to see your matching experience'}
              </h3>
              
              {selectedRequirement ? (
                <div>
                  <div className="mb-4 flex items-center">
                    <div className={`h-4 rounded-full bg-blue-500`} style={{ width: `${selectedRequirement.matchPercentage}%` }}></div>
                    <span className="ml-2">{selectedRequirement.matchPercentage}% Match</span>
                  </div>
                  
                  <ul className="divide-y">
                    {selectedRequirement.matches.map((match, idx) => (
                      <li key={idx} className="py-3">
                        <p className="font-medium">{match.company}</p>
                        <p className="text-sm text-gray-700">{match.position}</p>
                        <p className="mt-1 text-sm">{match.point}</p>
                      </li>
                    ))}
                  </ul>
                  
                  {selectedRequirement.matchPercentage < 100 && (
                    <div className="mt-4 p-3 bg-yellow-50 rounded-md">
                      <p className="text-sm text-yellow-800 font-medium">Recommendation</p>
                      <p className="text-sm">Consider strengthening this area by adding more details about your experience with {selectedRequirement.title.toLowerCase()}.</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="py-8 text-center text-gray-500">
                  <p>Click on a requirement to see how your resume matches it</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const renderRecommendations = () => {
    // Filter requirements with lower match percentages
    const improvementAreas = requirements.filter(req => req.matchPercentage < 70);
    
    return (
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Recommendations</h2>
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Overall Assessment</h3>
          <p className="text-blue-700">Your resume has a {overallMatch}% match with the Lucid Motors QA Automation Engineer position. Here are some recommendations to improve your match:</p>
        </div>
        
        <div className="space-y-4">
          {improvementAreas.map(req => (
            <div key={req.id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{req.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${getMatchColor(req.matchPercentage)}`}>
                  {req.matchPercentage}% Match
                </span>
              </div>
              <p className="mb-2">{req.description}</p>
              <div className="mt-2 pt-2 border-t">
                <p className="font-medium">Recommendation:</p>
                {req.id === 4 && (
                  <p>Expand on your experience with test planning, estimation, and risk assessment. Include specific methodologies or tools you've used for these activities.</p>
                )}
                {req.id === 1 && (
                  <p>Add more details about your hands-on experience with Python Appium client. Consider highlighting specific projects where you've implemented comprehensive mobile automation.</p>
                )}
                {req.id === 3 && (
                  <p>Elaborate on your experience designing and implementing test automation frameworks. Emphasize aspects like maintainability, scalability, and reusability in your framework design.</p>
                )}
              </div>
            </div>
          ))}
          
          {improvementAreas.length === 0 && (
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Great Job!</h3>
              <p className="text-green-700">Your resume demonstrates strong alignment with all key requirements for this position. To further strengthen your application, consider:</p>
              <ul className="list-disc pl-5 mt-2 text-green-700">
                <li>Quantify more of your achievements with specific metrics and percentages</li>
                <li>Include any relevant certifications or additional training in mobile automation</li>
                <li>Highlight any experience with CI/CD pipelines and their integration with automated tests</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  // Helper function to get color based on match percentage
  const getMatchColor = (percentage) => {
    if (percentage >= 80) return 'bg-green-100 text-green-800';
    if (percentage >= 50) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900">Lucid Motors Resume Match</h1>
          <p className="mt-3 text-xl text-gray-600">QA Automation Engineer Position</p>
          <div className="mt-4 bg-white rounded-lg shadow-sm p-4">
            <p className="text-sm text-gray-700">{jobDescription.description}</p>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="flex border-b">
            <button
              className={`px-6 py-3 font-medium text-sm ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${activeTab === 'requirements' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('requirements')}
            >
              Requirements
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${activeTab === 'keywords' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('keywords')}
            >
              Keywords
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${activeTab === 'recommendations' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('recommendations')}
            >
              Recommendations
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'requirements' && renderRequirements()}
            {activeTab === 'keywords' && renderKeywords()}
            {activeTab === 'recommendations' && renderRecommendations()}
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>This analysis compares your resume against the Lucid Motors QA Automation Engineer job description.</p>
        </div>
      </div>
    </div>
  );
}

export default App;