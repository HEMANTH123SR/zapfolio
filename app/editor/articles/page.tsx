"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/component/inputField";

interface Articles {
  articleName: string;
  articleDescription: string | null;
  date: Date | null;
}

const ArticlesEditor = () => {
  const [article, setArticle] = useState<Articles>({
    articleName: "",
    articleDescription: null,
    date: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setArticle(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setArticle(prev => ({ ...prev, date: value ? new Date(value) : null }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(article);
    // Here you would typically send the article data to your backend or perform other actions
  };

  return (
    <Sheet>
      <div className="h-screen max-h-screen w-full overflow-y-auto overflow-x-hidden">
        <div className="m-8 ml-16 flex w-full flex-col">
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold">Edit Your Articles</h1>
            <p className="mt-2 text-sm text-gray-600">
              Showcase your written work and manage your articles effortlessly.
            </p>
            <div className="mt-4 h-1 w-32 rounded-xl bg-[#FF560E]"></div>
          </header>

          <div className="mt-6 flex flex-col space-y-9">
            <SheetTrigger asChild>
              <Button className="w-48 bg-[#FF560E] text-base hover:bg-orange-500">
                Add Article
              </Button>
            </SheetTrigger>
            {/* render cards here */}
          </div>
        </div>
      </div>
      <SheetContent
        side={"bottom"}
        className="h-[90vh] overflow-scroll overflow-x-hidden pb-12"
      >
        <SheetHeader>
          <SheetTitle className="w-full text-center">
            Add Your Article Details
          </SheetTitle>
          <form onSubmit={handleSubmit} className="flex w-full flex-col items-center justify-center space-y-6">
            <InputField
              label="Article Name"
              id="articleName"
              name="articleName"
              type="text"
              placeholder="Enter the article name"
              value={article.articleName}
              onChange={handleInputChange}
              required
            />
            <div className="flex w-8/12 flex-col space-y-1">
              <Label htmlFor="articleDescription" className="pl-1.5 text-base">
                Article Description
              </Label>
              <Textarea
                id="articleDescription"
                name="articleDescription"
                rows={3}
                placeholder="Provide a description of your article"
                className="resize-none"
                value={article.articleDescription || ""}
                onChange={handleInputChange}
              />
            </div>
            <InputField 
              label="Date" 
              id="date" 
              name="date"
              type="date" 
              value={article.date ? article.date.toISOString().split('T')[0] : ""}
              onChange={handleDateChange}
            />
            <Button
              type="submit"
              className="w-8/12 bg-[#FF560E] hover:bg-[#f4733b]"
            >
              Submit
            </Button>
          </form>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default ArticlesEditor;