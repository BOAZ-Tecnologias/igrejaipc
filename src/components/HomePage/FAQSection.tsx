import { FAQ_MOCK } from "@/helpers/mockHelpers";
import FAQ from "./FAQ";

export function FAQSection () {
    return (
        <div
        id='questions'
        className='flex flex-col w-full mt-[2rem] gap-[20px] items-center md:items-start'>
        <span className='bg-gradient-to-r from-[#ff857e] via-[#c79cff] to-[#c79cff] text-transparent bg-clip-text text-h2 font-bold'>
          Perguntas frequentes
        </span>
        {FAQ_MOCK.map((faq) => {
          return <FAQ key={faq.question} faq={faq} />;
        })}
      </div>
    )
}