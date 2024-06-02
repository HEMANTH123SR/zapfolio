import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
export const FaqSection = () => {
    return (
        <section className="flex flex-col justify-between items-center   rounded-xl border py-16   bg-[#F6F6F8]  mx-8">
            <h1 className="text-5xl    font-semibold text-black  mb-8">
                Any questions?
            </h1>
            <Accordion type="single" collapsible className="w-10/12  px-5 ">
                <AccordionItem value="item-1">
                    <AccordionTrigger >What is Webpolio?</AccordionTrigger>
                    <AccordionContent>
                        Webpolio is an innovative platform that allows you to create a
                        stunning, personalized web portfolio effortlessly by leveraging
                        your existing LinkedIn data. With just a few clicks, your
                        LinkedIn profile is transformed into a visually appealing and
                        customizable website, showcasing your skills, experiences, and
                        achievements.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>How does Webpolio work?</AccordionTrigger>
                    <AccordionContent>
                        Simply log in to Webpolio with your LinkedIn account, and our
                        platform will seamlessly import your professional information,
                        including your bio, work history, education, and more. This data
                        is then used to generate a professional-grade web portfolio
                        tailored to your needs.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="hidden md:block">
                    <AccordionTrigger>
                        Do I need to have coding or web development skills to use
                        Webpolio?
                    </AccordionTrigger>
                    <AccordionContent>
                        No, Webpolio is designed to be user-friendly and accessible to
                        everyone, regardless of their technical skills. Our intuitive
                        platform takes care of the website building process, allowing
                        you to focus on customizing and promoting your online presence.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        Can I customize the design and layout of my web portfolio?
                    </AccordionTrigger>
                    <AccordionContent>
                        Absolutely! Webpolio offers a range of customizable templates
                        and design options, allowing you to personalize your web
                        portfolio to match your personal brand and preferences.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>
                        Is there a free plan available?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, Webpolio offers a free plan that provides a solid
                        foundation for creating a professional online presence. The free
                        plan includes basic features such as importing your LinkedIn
                        data, selecting from a curated set of templates, and ensuring a
                        responsive design.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                    <AccordionTrigger>
                        What additional features are included in the premium plan?
                    </AccordionTrigger>
                    <AccordionContent>
                        The premium plan unlocks advanced features and customization
                        options, including unlimited template selection, advanced
                        customization tools, custom domain integration, multimedia
                        capabilities, social media integration, and comprehensive
                        website analytics and insights.
                    </AccordionContent>
                </AccordionItem>



            </Accordion>
        </section>
    );
};
