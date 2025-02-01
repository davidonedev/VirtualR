import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-15">
      <hr className="my-8 border-t border-zinc-700/50 mx-auto w-4/4" />
      <h2 className="text-3xl mt-16 mb-28 sm:text-5xl lg:text-center my-8 tracking-wider text-center font-semibold">Assinaturas</h2>
      <div className="flex items-center justify-center min-h-screen flex-col sm:flex-row gap-20 -mt-14 mb-28">
        {[{ price: "R$329,97", period: "p/ Semana" }, { price: "R$119,00", period: "p/ dia" }].map((plan, index) => (
          <div key={index} className="relative rounded-3xl bg-gray-700 bg-opacity-25 p-8 ring-1 shadow-2xl ring-gray-900/10 sm:p-10 xl:w-2/5">
            <h3 className="text-base/7 font-semibold text-indigo-400">VirtualR</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-white">{plan.price}</span>
              <span className="text-base text-gray-400">{plan.period}</span>
            </p>
            <p className="mt-6 text-base/7 text-gray-300">Tenha 7 dias para aproveitar toda essa tecnologia incrível</p>
            <ul className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
              {["Flexibilidade de uso", "Experiência imersiva", "Custo-benefício excelente", "Pagamento semanal acessível", "Ganhe dois brindes nessa assinatura"].map((benefit, idx) => (
                <li key={idx} className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
            <a href="#" className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10">Get started today</a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Pricing;
