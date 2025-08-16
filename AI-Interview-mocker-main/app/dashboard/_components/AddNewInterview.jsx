"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();
  const { user } = useUser();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const InputPrompt = `Job position: ${jobPosition}, Job Description: ${jobDesc}, Years of Experience: ${jobExperience}. 
      Based on these, give exactly ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} interview questions along with answers in JSON format. 
      Only return valid JSON with "question" and "answer" fields. No extra text, code fences, or explanations.`;

      const result = await chatSession.sendMessage(InputPrompt);

      let MockJsonResp = result.response
        .text()
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      let parsedData;
      try {
        parsedData = JSON.parse(MockJsonResp);
        setJsonResponse(parsedData);
      } catch (parseErr) {
        console.error("Invalid JSON from AI:", parseErr);
        console.log("Raw AI Response:", MockJsonResp);
        setLoading(false);
        return;
      }

      if (parsedData) {
        const resp = await db
          .insert(MockInterview)
          .values({
            mockId: uuidv4(),
            jsonMockResp: JSON.stringify(parsedData),
            jobPosition,
            jobDesc,
            jobExperience,
            createdBy: user?.primaryEmailAddress?.emailAddress || "guest",
            createdAt: moment().format("DD-MM-yyyy"),
          })
          .returning({ mockId: MockInterview.mockId });

        if (resp && resp[0]?.mockId) {
          setOpenDialog(false);
          router.push("/dashboard/interview/" + resp[0].mockId);
        }
      }
    } catch (err) {
      console.error("Error in onSubmit:", err);
    }

    setLoading(false);
  };

  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all border-dashed"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job interviewing
            </DialogTitle>
            <DialogDescription>
              Fill in the details below to generate your mock interview.
            </DialogDescription>
          </DialogHeader>

          {/* Form is outside DialogDescription to fix nesting issue */}
          <form onSubmit={onSubmit}>
            <div className="mt-4">
              <label>Job Role/Job Position</label>
              <Input
                placeholder="Ex. Full Stack Developer"
                required
                onChange={(e) => setJobPosition(e.target.value)}
              />
            </div>

            <div className="my-3">
              <label>Job Description/ Tech Stack (In Short)</label>
              <Textarea
                placeholder="Ex. React, Angular, NodeJs, MySql etc"
                required
                onChange={(e) => setJobDesc(e.target.value)}
              />
            </div>

            <div className="my-3">
              <label>Years of experience</label>
              <Input
                placeholder="Ex. 5"
                type="number"
                max="100"
                required
                onChange={(e) => setJobExperience(e.target.value)}
              />
            </div>

            <div className="flex gap-5 justify-end mt-6">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setOpenDialog(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <LoaderCircle className="animate-spin" /> Generating from AI
                  </>
                ) : (
                  "Start Interview"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
