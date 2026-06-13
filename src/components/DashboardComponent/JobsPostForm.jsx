"use client";

import React, { useState } from "react";
import {
  Form,
  Fieldset,
  FieldGroup,
  TextField,
  Label,
  Input,
  TextArea,
  Select,
  ListBox,
  Switch,
  Button,
  FieldError,
} from "@heroui/react";

export default function PostJobForm() {
  // 👈 স্টেট সরাসরি বুলিয়ান হিসেবে হ্যান্ডেল করা হয়েছে
  const [isRemote, setIsRemote] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    
    // ম্যানুয়ালি স্টেট থেকে রিমোট ভ্যালু ট্রু/ফলস অ্যাসাইন করা হচ্ছে
    data.isRemote = isRemote;
    data.status = "active";

    console.log("Submitted Job Data: ", data);
    alert("Job posted successfully!");
  };

  return (
    <div className="w-full max-w-3xl bg-[#111113] border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-sm text-white mx-auto">
      <Form className="w-full" onSubmit={handleSubmit}>
        <Fieldset className="w-full space-y-6">
          
          {/* 📋 Job Info Section */}
          <div>
            <Fieldset.Legend className="text-xl font-semibold text-white tracking-wide">
              Job Information
            </Fieldset.Legend>
            <p className="text-xs text-neutral-400 mt-1 mb-4">
              Enter the core details about the position.
            </p>
            
            <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Job Title */}
              <TextField isRequired name="jobTitle" className="w-full">
                <Label className="text-neutral-300 text-sm font-medium mb-1.5">Job Title</Label>
                <Input placeholder="e.g. Senior Frontend Engineer" className="bg-[#1c1c1e] text-white border-neutral-800" />
                <FieldError />
              </TextField>

              {/* Job Category */}
              <Select name="jobCategory" className="w-full" placeholder="Select category">
                <Label className="text-neutral-300 text-sm font-medium mb-1.5">Job Category</Label>
                <Select.Trigger className="bg-[#1c1c1e] text-white border-neutral-800">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="technology" textValue="Technology">Technology</ListBox.Item>
                    <ListBox.Item id="design" textValue="Design">Design</ListBox.Item>
                    <ListBox.Item id="marketing" textValue="Marketing">Marketing</ListBox.Item>
                    <ListBox.Item id="management" textValue="Management">Management</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>

              {/* Job Type */}
              <Select name="jobType" className="w-full" placeholder="Select job type">
                <Label className="text-neutral-300 text-sm font-medium mb-1.5">Job Type</Label>
                <Select.Trigger className="bg-[#1c1c1e] text-white border-neutral-800">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="full-time" textValue="Full-time">Full-time</ListBox.Item>
                    <ListBox.Item id="part-time" textValue="Part-time">Part-time</ListBox.Item>
                    <ListBox.Item id="contract" textValue="Contract">Contract</ListBox.Item>
                    <ListBox.Item id="internship" textValue="Internship">Internship</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>

              {/* Application Deadline */}
              <TextField isRequired name="deadline" type="date" className="w-full">
                <Label className="text-neutral-300 text-sm font-medium mb-1.5">Application Deadline</Label>
                <Input className="bg-[#1c1c1e] text-white border-neutral-800" />
                <FieldError />
              </TextField>

              {/* Min Salary */}
              <TextField isRequired name="minSalary" type="number" className="w-full">
                <Label className="text-neutral-300 text-sm font-medium mb-1.5">Minimum Salary</Label>
                <Input placeholder="e.g. 40000" className="bg-[#1c1c1e] text-white border-neutral-800" />
                <FieldError />
              </TextField>

              {/* Max Salary */}
              <TextField isRequired name="maxSalary" type="number" className="w-full">
                <Label className="text-neutral-300 text-sm font-medium mb-1.5">Maximum Salary</Label>
                <Input placeholder="e.g. 80000" className="bg-[#1c1c1e] text-white border-neutral-800" />
                <FieldError />
              </TextField>

              {/* Currency */}
              <Select name="currency" className="w-full" placeholder="Select Currency" defaultValue="usd">
                <Label className="text-neutral-300 text-sm font-medium mb-1.5">Currency</Label>
                <Select.Trigger className="bg-[#1c1c1e] text-white border-neutral-800">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="usd" textValue="USD ($)">USD ($)</ListBox.Item>
                    <ListBox.Item id="bdt" textValue="BDT (৳)">BDT (৳)</ListBox.Item>
                    <ListBox.Item id="eur" textValue="EUR (€)">EUR (€)</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>

              {/* 🔄 ফিক্সড রিমোট টগল এরিয়া */}
              <div className="flex flex-col justify-end pb-2.5">
                <Switch 
                  name="isRemote"
                  isSelected={isRemote} 
                  onValueChange={(checked) => setIsRemote(checked)} // 👈 এক্সপ্লিসিটলি ভ্যালু আপডেট নিশ্চিত করা হয়েছে
                >
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                  <Switch.Content>
                    <Label className="text-sm text-neutral-300 cursor-pointer">This is a fully Remote role</Label>
                  </Switch.Content>
                </Switch>
              </div>

              {/* 📍 লোকেশন ইনপুট - রিমোট অন থাকলে থিম ওয়াইজ ডিজেবলড স্টাইল পাবে */}
              <TextField 
                name="location" 
                className="w-full md:col-span-2" 
                isDisabled={isRemote} // 👈 স্টেট এর সাথে ডাইনামিকলি ডিজেবল হবে
              >
                <Label className="text-neutral-300 text-sm font-medium mb-1.5">Location</Label>
                <Input 
                  placeholder={isRemote ? "Remote role - No location required" : "e.g. Dhaka, Bangladesh"} 
                  className="bg-[#1c1c1e] text-white border-neutral-800 disabled:opacity-40 transition-opacity" 
                />
              </TextField>
            </FieldGroup>
          </div>

          <hr className="border-neutral-800/60 my-2" />

          {/* 📝 Job Description Section */}
          <div>
            <Fieldset.Legend className="text-xl font-semibold text-white tracking-wide">
              Job Details
            </Fieldset.Legend>
            <p className="text-xs text-neutral-400 mt-1 mb-4">
              Provide thorough specifications regarding the job obligations.
            </p>

            <FieldGroup className="flex flex-col gap-5">
              <TextField isRequired name="responsibilities" className="w-full">
                <Label className="text-neutral-300 text-sm font-medium mb-1.5">Responsibilities</Label>
                <TextArea placeholder="Outline the daily tasks and key responsibilities..." className="h-28 bg-[#1c1c1e] text-white border-neutral-800" />
                <FieldError />
              </TextField>

              <TextField isRequired name="requirements" className="w-full">
                <Label className="text-neutral-300 text-sm font-medium mb-1.5">Requirements</Label>
                <TextArea placeholder="Required skills, experience level, tools, educational background..." className="h-28 bg-[#1c1c1e] text-white border-neutral-800" />
                <FieldError />
              </TextField>

              <TextField name="benefits" className="w-full">
                <Label className="text-neutral-300 text-sm font-medium mb-1.5">Benefits (Optional)</Label>
                <TextArea placeholder="Health insurance, performance bonus, equity, hybrid options..." className="h-24 bg-[#1c1c1e] text-white border-neutral-800" />
              </TextField>
            </FieldGroup>
          </div>

          {/* 🔘 Actions */}
          <Fieldset.Actions className="flex items-center justify-end gap-4 pt-4 border-t border-neutral-800/60">
            <Button type="reset" variant="secondary" className="px-5 py-2.5 rounded-xl text-neutral-400 hover:text-white transition-colors bg-transparent border border-neutral-800">
              Cancel
            </Button>
            <Button type="submit" className="bg-white text-black font-semibold px-6 py-2.5 rounded-xl hover:bg-neutral-200 transition-colors">
              Publish Job
            </Button>
          </Fieldset.Actions>

        </Fieldset>
      </Form>
    </div>
  );
}