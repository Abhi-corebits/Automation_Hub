"use client";

import { useState } from "react";
import { Upload, X, Plus } from "lucide-react";
import { Badge } from "../ui/badge";
import { createPortal } from "react-dom";

export default function AddProject() {
  const [formData, setFormData] = useState({
    title: "",
    oneLiner: "",
    description: "",
    badges: "n8n",
    code: "",
    screenshots: [] as string[]
  });

  const [isDragging, setIsDragging] = useState(false);
  const [push, setPush] = useState(false)
  const [success, setSuccess] = useState(false)

  // Handle text input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result as string);
          if (newImages.length === files.length) {
            setFormData(prev => ({
              ...prev,
              screenshots: [...prev.screenshots, ...newImages]
            }));
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onloadend = () => {
            newImages.push(reader.result as string);
            if (newImages.length === files.length) {
              setFormData(prev => ({
                ...prev,
                screenshots: [...prev.screenshots, ...newImages]
              }));
            }
          };
          reader.readAsDataURL(file);
        }
      });
    }
  };

  // Remove image
  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      screenshots: prev.screenshots.filter((_, i) => i !== index)
    }));
  };

  // Handle submit
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.oneLiner.trim() ||
      !formData.description.trim() ||
      !formData.code.trim() ||
      formData.screenshots.length === 0
    ) {
      alert("Fill all fields");
      return;
    }

    try {
      const parsed = JSON.parse(formData.code);
    } catch {
      alert("Invalid JSON");
      return 
    }

    // console.log(formData)
    setPush(true)
    try {
      const response = await fetch("/api/userprojects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.status) {
        setSuccess(true)
        setTimeout(() => setSuccess(false), 5000)
      }
      setPush(false)
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }

  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 mt-1">
          <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Add New Project
          </h1>
          <p className="text-gray-400 text-lg">Share your automation with the community</p>
        </div>

        <div className="bg-gray-900/40 backdrop-blur-xl rounded-2xl shadow-2xl shadow-blue-500/10 border border-gray-800/50 p-6 sm:p-8">
          {success &&
            createPortal(
              <div className="fixed top-[10%] left-[50%] -translate-x-1/2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 border-2 border-blue-400/50 text-white text-lg font-sans p-4 shadow-xl shadow-blue-500/50 z-50 backdrop-blur-sm">
                Yay!!! Your project is on our community. 🎉
              </div>, document.body
            )
          }

          {/* Project Title */}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="title" className="block text-lg font-semibold text-white mb-2">
                Project Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                placeholder="e.g., Twitter Trend Scraper"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all backdrop-blur-sm"
              />
            </div>

            {/* One-Line Solution */}
            <div className="mb-6">
              <label htmlFor="oneLiner" className="block text-lg font-semibold text-white mb-2">
                One-Line Solution *
              </label>
              <input
                type="text"
                id="oneLiner"
                name="oneLiner"
                value={formData.oneLiner}
                onChange={handleInputChange}
                required
                placeholder="e.g., Scrapes trending tweets and saves to Google Sheets"
                maxLength={100}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all backdrop-blur-sm"
              />
              <p className="text-xs text-gray-500 mt-1">{formData.oneLiner.length}/100 characters</p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label htmlFor="description" className="block text-lg font-semibold text-white mb-2">
                Detailed Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={6}
                placeholder="Describe your project in detail. What problem does it solve? How does it work? What technologies did you use?"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all resize-none backdrop-blur-sm"
              />
              <p className="text-xs text-gray-500 mt-1">{formData.description.length} characters</p>
            </div>

            {/* Json code */}
            <div className="mb-6">
              <label htmlFor="code" className="block text-lg font-semibold text-white mb-2">
                Json Code *
              </label>
              <textarea
                id="code"
                name="code"
                value={formData.code}
                onChange={handleInputChange}
                required
                rows={6}
                placeholder="Drop your project here!!!"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all resize-none backdrop-blur-sm font-mono text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">{formData.code.length} characters</p>
            </div>


            {/* Tech Stack Badges */}
            <div className="mb-6">
              <label className="block text-lg font-semibold text-white mb-2">
                Tech Stack / Tools <span className="animate-pulse duration pl-1 font-bold text-blue-400">(*will provide other options in future updates!!*)</span>
              </label>
              <Badge className="bg-gradient-to-r from-red-600 to-red-500 text-white text-base font-medium px-4 py-1.5 shadow-lg shadow-red-500/30">n8n</Badge>
            </div>

            {/* Image Upload */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-white mb-2">
                Project Screenshots *
              </label>

              {/* Upload Area */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all backdrop-blur-sm ${isDragging
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-gray-700/50 bg-gray-800/30 hover:border-gray-600/50'
                  }`}
              >
                <input
                  type="file"
                  id="screenshots"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <label htmlFor="screenshots" className="cursor-pointer">
                  <Upload className="size-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-300 mb-2">
                    <span className="text-blue-400 font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                </label>
              </div>

              {/* Image Preview Grid */}
              {formData.screenshots.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-white mb-3">
                    Uploaded Images ({formData.screenshots.length})
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {formData.screenshots.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image}
                          alt={`Screenshot ${index + 1}`}
                          className="w-full h-40 object-cover rounded-xl border-2 border-gray-700/50 group-hover:border-blue-500/50 transition-all"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-lg"
                        >
                          <X className="size-4" />
                        </button>
                        {index === 0 && (
                          <div className="absolute bottom-2 left-2 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-semibold rounded-lg shadow-lg shadow-blue-500/50">
                            Main Image
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Preview Section */}
            {(formData.title || formData.oneLiner || formData.screenshots.length > 0) && (
              <div className="mb-8 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Preview
                </h3>
                <div className="bg-gray-900/40 rounded-xl border border-gray-700/50 overflow-hidden">
                  {formData.screenshots.length > 0 && (
                    <img
                      src={formData.screenshots[0]}
                      alt="Preview"
                      width={500}
                      height={500}
                      className="w-full object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h4 className="font-bold text-xl mb-2 text-white">{formData.title || "Project Title"}</h4>
                    <p className="text-sm text-gray-400 mb-3">{formData.oneLiner || "One-line solution"}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {!push &&
                <button
                  type="submit"
                  className="flex-1 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
                >
                  Publish Project
                </button>
              }
              {
                push &&
                <button
                  className="flex-1 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 cursor-wait"
                  disabled
                >
                  Pushing your project... ✨
                </button>
              }

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}