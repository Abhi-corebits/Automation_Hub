"use client";

import { Button } from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Setting() {

    const router = useRouter()
    const [image, setImage] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        bio: ""
    });
    const [preview, setPreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file))
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Replace with your API endpoint
            console.log(formData)
            const response = await fetch("/api/setting", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSuccess(true);
                setTimeout(() => setSuccess(false), 3000);
            }
            else{
                alert("Updation Failed")
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeleteAccount = async () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete your account? This action cannot be undone."
        );

        if (confirmed) {
            try {
                const response = await fetch("/api/setting", {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                if (response.ok) {
                    alert("Account deletion request submitted");
                    router.push("/")
                    // Redirect to home or logout
                }
            } catch (error) {
                console.error("Error deleting account:", error);
                alert("Failed to process deletion request");
            }
        }
    };

    return (
        <div className="flex justify-center items-start min-h-[600px] px-4 sm:px-6 lg:px-8 py-8">
            <div className="w-full max-w-3xl">
                {/* Success Message */}
                {success && (
                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center font-medium">
                        Profile updated successfully! ✓
                    </div>
                )}

                {/* Settings Form */}
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name Field */}
                    <div className="space-y-3">
                        <label className="block text-white text-xl font-semibold">
                            Change Profile Picture
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-fit px-5 py-4 text-lg bg-gray-800 /50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                        {preview && (
                            <img
                                src={preview}
                                alt="Preview"
                                className="w-32 h-32 rounded-full object-cover border border-gray-600 mt-3"
                            />
                        )}

                        <label htmlFor="name" className="block text-white text-xl font-semibold">
                            Change Your Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your new name"
                            className="w-full px-5 py-4 text-lg bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>

                    {/* Bio Field */}
                    <div className="space-y-3">
                        <label htmlFor="bio" className="block text-white text-xl font-semibold">
                            Change Your Bio
                        </label>
                        <textarea
                            id="bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                            placeholder="Tell us about yourself"
                            rows={5}
                            className="w-full px-5 py-4 text-lg bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Saving Changes..." : "Save Changes"}
                    </Button>
                </form>

                {/* Danger Zone */}
                <div className="mt-16 pt-10 border-t border-gray-700">
                    <h2 className="text-2xl font-bold text-white mb-6">Danger Zone</h2>
                    <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
                        <h3 className="text-white text-lg font-semibold mb-3">Delete Account</h3>
                        <p className="text-gray-400 text-base mb-5 leading-relaxed">
                            Once you delete your account, there is no going back. Please be certain.
                        </p>
                        <Button
                            type="button"
                            onClick={handleDeleteAccount}
                            variant="destructive"
                            className="text-lg font-bold px-6 py-3 hover:scale-105 transition-transform"
                        >
                            Request to Delete Your Account
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}