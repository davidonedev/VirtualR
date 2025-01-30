import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-15">
      <hr className="my-8 border-t border-zinc-700/50 mx-auto w-4/4" />
      <h2 className="text-3xl mt-16 mb-12 sm:text-5xl lg: text-center my-8 tracking-wider">
        Assinaturas
      </h2>
      

        <div className="flex flex-row">
            <div class="relative rounded-3xl bg-gray-800 bg-opacity-25 p-8 ring-1 shadow-2xl ring-gray-900/10 sm:p-10 xl:w-2/5">
                <h3 id="tier-enterprise" class="text-base/7 font-semibold text-indigo-400">
                VirtualR
                </h3>
                <p class="mt-4 flex items-baseline gap-x-2">
                <span class="text-5xl font-semibold tracking-tight text-white">
                       R$329,97
                </span>
                <span class="text-base text-gray-400">p/ Semana</span>
                </p>
                <p class="mt-6 text-base/7 text-gray-300">
                    Tenha 7 dias para aproveitar toda essa tecnologia incrível
                </p>
                <ul role="list"
            class="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10"
          >
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-indigo-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clip-rule="evenodd"
                />
              </svg>
              Flexibilidade de uso
            </li>
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-indigo-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clip-rule="evenodd"
                />
              </svg>
              Experiência imersiva
            </li>
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-indigo-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clip-rule="evenodd"
                />
              </svg>
              Custo-benefício excelente
            </li>
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-indigo-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clip-rule="evenodd"
                />
              </svg>
              Pagamento semanal acessível
            </li>
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-indigo-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clip-rule="evenodd"
                />
              </svg>
              Ganhe dois brindes nessa assinatura
            </li>
          </ul>
          <a
            href="#"
            aria-describedby="tier-enterprise"
            class="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10"
          >
            Get started today
          </a>
        </div>
      </div>

      {/* Card Diario */}

      <div class="relative mt-16 rounded-3xl bg-gray-800 bg-opacity-25 p-8 ring-1 shadow-2xl
       ring-gray-900/10 sm:p-10 xl:w-2/5">
        <h3
          id="tier-enterprise"
          class="text-base/7 font-semibold text-indigo-400"
        >
          VirtualR
        </h3>
        <p class="mt-4 flex items-baseline gap-x-2">
          <span class="text-5xl font-semibold tracking-tight text-white">
            R$119,00
          </span>
          <span class="text-base text-gray-400">p/ dia</span>
        </p>
        <p class="mt-6 text-base/7 text-gray-300">
          Tenha 7 dias para aproveitar toda essa tecnologia incrível
        </p>
        <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
          <li class="flex gap-x-3">
            <svg
              class="h-6 w-5 flex-none text-indigo-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Flexibilidade de uso
          </li>
          <li class="flex gap-x-3">
            <svg
              class="h-6 w-5 flex-none text-indigo-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Experiência imersiva
          </li>
          <li class="flex gap-x-3">
            <svg
              class="h-6 w-5 flex-none text-indigo-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Custo-benefício excelente
          </li>
          <li class="flex gap-x-3">
            <svg
              class="h-6 w-5 flex-none text-indigo-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Pagamento semanal acessível
          </li>
          <li class="flex gap-x-3">
            <svg
              class="h-6 w-5 flex-none text-indigo-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Ganhe dois brindes nessa assinatura
          </li>
        </ul>
        <a
          href="#"
          aria-describedby="tier-enterprise"
          class="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10"
        >
          Get started today
        </a>
      </div>
    </div>
  );
};

export default Pricing;
