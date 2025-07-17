import React from "react";

function Home() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="text-left pt-32 pb-24 px-4 md:px-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 font-sans">
            <span className="text-gray-500 dark:text-gray-400">I'm</span> Eihab Khan
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
            A front-end engineer and UI/UX designer helping startups turn their visions into a digital reality.
            I specialize in designing and building modern mobile and web-based apps.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
              See my Resume
            </button>
            <button className="border border-black dark:border-white px-6 py-3 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition">
              Get in touch
            </button>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold mb-12">Selected Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {[
            {
              title: "Token Sale Platform",
              desc: "Built a token sale platform with dashboard UI and responsive design.",
              tech: "React, Tailwind CSS",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3v3G3rowZDgi2vUGHPlcV_ylmjHjOn2INyg&s",
            },
            {
              title: "Open Source Docs",
              desc: "Created reusable docs using Markdown and Storybook.",
              tech: "Markdown, Storybook",
              image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "React Documentation",
              desc: "Built a token sale platform with dashboard UI and responsive design.",
              tech: "React, Tailwind CSS",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9jRDT1sYUyVEnQvripG0O8C0jdq-gcpCWw&s",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg mb-4 w-full h-56 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{item.desc}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Get to Know Me */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Get to Know Me</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "About Me",
                desc: "Who I am and what I do",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaygPgtROWQbux82QCWACloREjQA2CWCORQ&s",
              },
              {
                title: "NotBook",
                desc: "My thoughts, insights and reflection",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUUxoZ8cTQ0XiNI0SO7WA9TqCeqvcjYw-FQ&s",
              },
              {
                title: "BookShelf",
                desc: "Books and Piece of wisdom I've enjoyed reading",
                image:
                  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhIVFhUXFRcXFxYWGBgXFRUVFRcWFxcYFxUYHSggGBolHRYXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGzUjHyUtLjctKzAtLS8vLy0tLS8tLS0tLS8rLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAEDBAYCB//EAEsQAAIAAwUEBwMKAwYCCwAAAAECAAMRBAUSITEGQVFxEyIyYYGRoSOxwQcUQlJicoKS0fCiwuEkJTNjstI0UxUWNUNkc4OTo7Px/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAMBAgQFBv/EADMRAAICAQICCAUEAgMBAAAAAAABAhEDITEEEhMiMkFRYXGhgZHB0fAjM1KxFOFiovEF/9oADAMBAAIRAxEAPwD2CGh4UQSNDQ8NAAoUKGgAUNDwoAGhjEc+eFpXfpEBtNdIALDNEbPEJmxwZkQTRNijoGIEMSiADqsNWOSY5xQAd1hRyDD1gAeFDVhqwAdVhqw1Y5LQAdExyXA/fj8IgmTqQHvW80pShJ0yqNcv131heSairZAcd4iLRm7PezghS5YZZstG0zr3/vmfltURXHmU3RKdkgMdrEYiRYcSdwoaHgALQoUKJKjQoUKABoUKFAA0MYeGMAFO87L0qFQcLVBVuBH7I8YGdM8uizEI3F1FVPfX6PKDpjgxVokHywTu0icSIr3i7y3WYD1K+0HDdipvFPLCOJgjWukEXe4WQhKQjHZMRM0SBy0NWOWaGBgAkrCxRxWFWADusKsR1hi0AHeKIprwzPFS0zsogCKfNjFXneOKZhV1IFSaHecWRO/ONhYSHmAEwbe7ZDHrSZTsKGrS0Lb9GI1qOMKyYukW5B5bYJhJBVjiqSSCQTTIg1FOB5VjV3Rbiq0dTrkaHQnhzy8IDbSyhLt1EoMSBsIDFa9ZAABQA4Vz5mNTLehUVFSo1OtKRz445xyOnsUS1LstwRURKsRgR2sdVDSSFDQ8SAXhQoUSVGhQoUADQoUKABoYw8MYAOTHBjpjETGIAo37NwSWcIHKZgHT6pr3UJjENtDN6NpTEFKUyyK0z7Q1GWh3Ru7dNwy3alaIxI0qADUVjymVbRNXAsshsKuxJrkQhyy0NcXiBujLxCkusnoDvcvXZeLSHLBqD8dCeSHXmDG9u+8FnSw6kZ60NaHyB8wI84tTVKFGCkSAxANDiRmBFRo2Gjf/ALBjY+1s0wUfHUHpMsLIM8JbdMU011BYeNcGTuITNsTCBjgmGLxsLkmKGLRA02B9uveVK7cxQeFat+UZxDdBQUaZEbTYx9t2xGkqWT3vkPIZn0gFa75nze1MIHBOqPTM+JhbypDFjbN3eF9SZXbmAHgM2/KM4yt67Xk1EmWfvPl/CP1jOFIfDCnlbLrGi7c20E5LTLmzWJQEhlUZYWBFaDWlQfCN/O2ys2GvSA0rQUetdRkV1qAPGPNkSHkOjvgDAtlUKQSKnDy1MTHI0S8Sk9CS89onm2xp4l1TJVBoDgUEVzBFSSTpvjY3ZtEs+ZLHQuuozIpU+OenCBy7PrJtUtG64pNZyRQHAqFQOGbHyEW7plD5xLpuqfJGhVvmrxZHRRqzXiJFjgRIsbhB1WHhoUBAXhQoUSQKGh4YwANDQ8MYAFHBMOxiJmgAZmiF2hO8VpjxBJmPlHtzy7MuFiAXo1N4wnKPPLPZpkq1UkzJjU6ME5klGRG3k0UBgPCNf8q04fNBn9I/6WjGWNuknq24CzOeGUmTwIijVl1sdXZNtVomGekksHdgyojMFKYUI6goopnTvMepXNdcmzL7JSCwGIsatxpXurugL8jc3FYbQoOa2ub6rLMWmv6XUqSVINOsCNO/SIcYRdkJXsg406Au01/fNZXSBcRxBaVprXP00hjeAOjA8jWKF4WNLSAk0nCGDEA0LUByJ1Az3ZxLemhKWupmrRtc87IzSg4KMI8xU+sV5bKcwwPjUxtJWy1iZadAum7Fi/NWvrGC2xuMWOauBiUcErXVStKiu8ZinjGeUXuOjJbF0w2GCuzoSbJqygmmu/z1i1ddz1tErEwKFOkwAAA1YBQxqS3pWFxfM6GMCybG7VKqSAKk00HGCVo2bnoquUXN1UqWGIAjETRQRSgO/wAI00mhWnCRKBFKCrqzZekX70cAhm0DgnktnY/zRVTfSSj4V7loxUq+J59tlLlJPkSkTqFJRmLWuLHNINTXWgpDzrJLS8kCLhRZdmGHNiA8+tN5+kPIxTvm1/25GmDMJZxpSoE2a2/uIgxIQTb2KnIBLM2WvswHpyqo9Y6Lrk/PIzYr578n/TNLanBtMw71lTfDE1B/pEQXEtbTyRj/AKR8YGXreySrROxOo9gAASKkmaTl4N6GCGyc9ZkxnUgjBTLvI/SMKg1kV9+vsWUrgzWVjtTEAMSLG0QS1hRxWGgIDkKFCixAoYw8ckwAIxGzxzMmRTtNrVBV2CjiSAPWIbCiwzxCzxnrdtZKXJA0w92S/mPwBjP27aO0TNCJY4Lr+Y/CkKlmihqxyZs7bbkliruqjixp5cYDSb5WezLINSoBqwIU1qMjru4RiZoLGrEk8SanzMQpVWDKxUjQg0MKedsYsVF75Q7PPmWcLhzxg8xQ6HSMjdVitIyRDiyHWKgUAHEjcPSN9ZNpmw4J6CYp30FfFTkfSBYvjDQLKWtKdYk1PHCMoTLNOD6upohhhNa9UpXbsu6KRLtVpEt3q0tGaWC5GeJRk+ndlG0tF1HBWZKoqjMmgpuy0O7vMZyxXral9mszow53AAk8zn7oVts035ylnn9IXmIXV3YOhANNA1dTER6XLp3kT6HFrehBb5Co4Esk5V5GpFKjlEtlSZmwbnnXTiYz2213zbOhBnZVl0VBgFHMwUOdT2PWDmyK0sa/dMWnjniiuZ6lI5IZG3FaGquOY7EVHaAIrwO+m6Kvym3O86zAylq0o9I3EpQhqeeL8MV9k7SykFiKCorQVAFSBi3gVNK6VMT7U7TWadK6ORaFd2ZaiWSeqDU1YZUyApvrD7qNiq6wA2PlMslsXAxq7vIFoTLSzL/M1f4YEXclJTU+ofdF57SEnzDrhsvd9R+J74Vw+rY9/T7F5CBUcPmqbt8unxiDbK2GXJmn7E4qOJWQqj1qIz1vv9JbzOiPSFpkp8skHRoi4cW/s7uMBdoL2m2jrT5gRM6LoKEAEAat2RlCUv1Zv09i0HUU/X3B182iSyOqyys4NZEFa1EtJRaawPZqXw9/rHZtc5rTMtMtjLxMCGOEYQooBU1HvgW14ouUpMR+u4y8E/WO5dnmzaNMbLixoo5D9I2SnJ6vQzwioqkaC67NZp0wtabRmTmcLdbxAoB+6R6TcNks0tP7NhIOrKQa04kaco86ui5kJzauVdKekb3ZKVhlvu9pTyVf1imOS5qQZE6sOCJFiOsdAxpEHdYeOKwogg0EMYeGi5BFaJ6oKuwUcSQB5mM/b9qZS5JVz9nIfmPwrHN/2JZk04hwoa6ZCAky5SRVG8Dr5iMk+IdtIfHGqtkdt2knvktJY7s2/Mf0EBpoLHEzFjxYknzMWrTZnTtIeeo8xFUkmEuTluxySWxCyiI2bhEzU3xRvC8pcnJ2VSfo6ueSjMxUkmYcYiYd3ju84Aztp6sRLlMPtzATT8ANYp2qzzLRTHaBMBNAuLBnuGDQfiFYbHFKRHMgtaL7s6tg6TE/1UzFfvaesV/n8xrQbOlE7IxLQt1lVsyQR9LhFK89nmkJKxUOOYmo6y16Re1zQ8NBF/Y+xO1tn9V2wIjZAsclWgyqSaQ2OOC1/sXkc06fsG9lLuU2ghqtQVDMSTiAHWxHPefONlf8mt42If5E33y4DbNMTaKMKESaU3ijUIg9fk+l62Qf+GmnzZB8I0w7Ua8DPm7LMD8rZpkNPY151n0+MXNlxSxj7h9xgb8rb9cj7UinGhFqPx90ENl5oNjAGuEj0jNxurG8KqiGbJYyssrrUGvI6iPO7TZJdltzShMAXIgE0oHFQtT5cqR64ypJlGZNcAKAcutpwAzPKkeK7VTvnVqmz0BwsQFB3KqhR50r4xPKqpkpu7R6jZ8pDEZ9Q+6MReM+p6S1TaGg6oFXoNKIunMxm7D00qolzHQHIqrEA17hlBO7tm2mNVsicySeue/j5whQUN2OUm+4gn34xykJgH1moz+XZX1jizXTMmsC5oWIALnNiTQAA5nXlB+zWRJKz6LiKTFVWahYezDGjU4mLbykF5SVC9YdDXm8uVv5msMj/wAfzb7kJXKm/wAp/Ygum5US0JLwrMFC0ws1KKr4CFAGup5DvgNYJwZOnny2m4cxqFRSMyaU9KQV2bdnt1sIJbC81V/LOpT8sehXxcyrdjrkPYECvErkPOkTl5oUoq/F+Rk6WTYDu9kmIk2UAuJM1Gm/Q92eu6kanZzKTXizehw/CMBstaMCdC9A6ilK8dI9BuNaSE78R82JimFfqM05H1UEaxIscIkTqsajONSFHVIUBAchGFCi5ACvke08B8R8Iqpr++EXr7XrD7vuJihK1jm5e2zVDso4MC76sydEXCCo4ZVz30gmRlFO9BWQ/L4iKF0eJ2naK0TyUL9CK0wyx727XlDybgoA7OKM+HFXFViCc657t/GNFZ7nEyVaEdFLdEZkontITXDnxBpE1vmBrCkzLqrKmd5AdGJP4XI8I2YZRk2kqplOJxuCTu7Vpl7YO7gJ8xJqq4lrliFRixSmBVTp1GYZRo/lBuiTKsEyaklEdJqPjAAOFZyGg36eEBbim4bcy4hSbZ8S/aZUdMu/IHwjZ7cr0t02qgr7KY35UDfCFtKOYq7cEYvbIjo5TH6Nrlg8hNDe6b6xa+TrK3WumhWV/wDWB8Iyu0V4A2acldPm80VJJo4s9cznqpgh8m98KtrfpCFDy5fWJoKqnEwj/wCjzLhsnLuv9DY6uPnH6sJ3LbgLdOBPZWYDn/mV+MT7dX0JF6WNtV6Ch7scwUNfCMdbLOwnzpzOEQzJlGYgDCXNCC2elNPCILzv5WYMFM9woUTHFEAFaAAdrxjXizUo8q2SE5MSaaYV25s7Wq1Ey6MgSWC1RgBXHXrfiEUbonSpDAGc5GjdGAygHhiIr4QFxz55oxZuCL2R+EZeJi3aJKWZVa0EjFXCqipalK56DWIySc5a/ItjjyRpfM9At211mdaJJnTWGmOgFfAk+kZe6tn3tU7DVEZ2LFagUxEnTcPOA9z3+k1ymFZS7qtm3NiRn4jWNf8AJ7YEN7ywjVEuTMfDiL4GJEs66VEwaGHY8DnfNpS8PqUlkUV1dSxeGy6WSfJkE4i7OGZBQ0SU0w0Y6ZikZ7YcElmYkkpLJJ1qUB+MehbZT6WqtaUlWxshWuCSKVO5fjhjBbAyaK+miaZDsL6xmypKLoZjbb1ObS1EtLcZ7fwy0EQ7NzB88lzJjVNSzM32dMt1KGK98Tf7O9NXnzQPQV9IFXes3FVCRSue5QSSak8zrDMbSirI1U2/J/019S/s3eCS2tUxq+1mNQUFWQs6tSuR6rtrlURpb02hUy+isgYJQFnmBVwnLvIrkO7TLhjBNlywAPasMgKno1qSTnqcyTllmY7ZWYqZ7hQeyun5UHvMWnNspDGkG9n7HY2mVtE1ya6hWIY/eFT4kR6/YZKhFCdjCMOvZplr3R5vs5d8tWDYa0oc89OMeo2SVhRF4Ko8gBFcMk26JyqqOlWOoekPDxJzCgn8xhQUQTw0PDRYAVfYzTxHugZLOfjBq87MXApSorrvrAgSSp6wINYwZ4vnbNONrloic6xWtwrJmfdMTTzmeccT19k/3G9xhAxGAua0lbRKxKMDpMlc8Dk1P5vSBVmmE2afZj/3ZnSc+A6XCfJUHlEFmvIAlXNDKtj0pr0bVGnCGnK7WueZShlmlGBABoQFrnurQ599IfB8mR33r3T/ANjMi6TEq7nXwf8A4dXbeeA3VaWOXtJTk6dVwM/BjG92Z2gWfd1olT2VWAeWBXOYplgBgpzzz0rGBEuVZpayps2oQsyylozAtSvKtN5gfab8dspKCWvHtOfE5D95xecuefMl8REYqMabJzYAqqbS4QdEksjVnEvTqjWIDe6p1bNKpuxvmfBRkP3lEFluqZNJahJ3sT72MEZdjkyxvmvwGSA97anwiJNN29WXV0ktAZLsc20NVsUw8ToPgIJW/ZroJDziSrACgXIZnfxg7s0GmYknyUwEGmEVQ5gBe7x1glt8gFkemXZFOGkU522vUikm15GT2nmstoSzyz0aFFZggC1JBrUjPdGj2p2eQ3aSxqZUvGh3qQAaV4EZeUZbab/tFP8AyU/mjf7WH+7Z3fJp5gRK05S28WeI3eiEtjZlohKUXFifKitmMIOeedOEeufIHZq2ie9OyiKPxMzH/QI8tuywoXpMZ1WmTKoYhsqEqSKildM9I9f+TG3Wa70fFaBM6SZUFEeqoqEDGhFVOInj+nVXE41jcL1/O/Yw9FK06L22N5qOmQCrNZ7c4PDo0ZSP4qeEYHY69AjMrButShArSgAzA00ia/NoAZru5GaTpQlLRmCT3xPjbRScoBI06eMKqJcveFyX8T6sf3SObKMWn5/n0NcW9Cxar0kCWFo0xlmzWwCqrVnJGJjupwrEd3k2uYsmYDLXUKmS9xKntc4O3Bs3KqC3X8KDyPxjpZY/6WmhRklFA4AKsU5o60TTvUz2Eia0qzqCUcI0xsyTXPAug0PfBm97iZJNOld6Mkw4gBV6gFt5AAalK/Rzi7e9qlybdKVyq1kSTnQVJDetYh2nv7OYE+kwSg+qhAPgcNa/ajTVRMqnJ5GnsaC55fVPeKeYp8Y9LpHlWyN6pOdJeYYzJeRB0DqTmMtAY9WhfDqrHZnsNSEq1IHfCJiSyCrqPtCNIg0NIaFCixUow0PDGIJKN7WtpUssqY2rQLULnzPKPKdptorY7YWYyhXJUBXl1tT50j1W+R7PkR8Yzs2Srgh1DCuhFRpGTNkalXcaMUVVnn9j21tEs0nKJq8ey48RkfEeMay7Np7NaFKrMwuVIwTOq1SDpXJvAmKt5bGyXzlkoeB6y/qIyF67JzpVapiX6y9Zf1HiIR1WNoqWk2WTMdyxmszs2BNASfpPp5eUULZfU+YMKUlJ9WXl5tqfCkWBdGEY5hVE+s5oP6xWS9JAbDITpW+u4ov4V1MXilutSddiOw3JMmZ4aAnU5DP3xpLouCWQrZMKgEk01bDkvMHWIqs4kM5FemlZf+qBpoMoO3AR0TVpXpJdKClD0r7uUEratmpcOo1fhfuvuTXZc6THXpamWJk4FakACXiw9mh3ZxpbZd9l6GZ0ciWFEvB2BpiNQa8anvzgNYXqGG/pbR/pb9YnuCZONinGehV8BLBtcQGZp9GtK03RaHZE8bFRnGvD7kV12legCae1oBTI0UZ18DAv5Qf+FbvK+8RP0fRogxoxLo3VNaVVsieOlecVNtn6Sy9XOpTIZ7xCeRRd+LLcTXTOv4r6mN2sYrblelcMtPjB69dpRPsvQIj1ZQtTSlMu810iltLZ0E8zJ0wIuFQAM3YiuSr46wFe8XfqWdCgO/tTW8fo+HnDEuZLyE3VnQs8uUR0zhSfoDN/EfRHeYlmyrTMX2SYZNaYkYEn7z6j0hpmyrLZ5lpmZYRXXMsdKnf+84K3KKXdN78vMxZtbrUrrsRXRssK+01BUEZ0GKp8dI1lju1ZXQ5At7YGgoDRlAAXdQV9YgM6k2bn2XP8EpjFGy3hgs1nANCJdSeGITDnXkIrjbljnJ+RFfqwivFf2/sFLoWprxqedTGfu84rxtT/AGm939IMbL25JgADAkAZb/KL137GTlZp6Mr9MuKnZZS4rTPIgV1rC4Rb5kMm1ZiflDlB7bTXDJlJlnmAT8RBPZjYOfaSJkz2cs5lm7TchqefrG+2c2FkWejzQJszXPsg8jr4+UauNqi3uZXJLYGXJcMiyLhlJnvc5sfHdyEESYRMcFoYklsUbsdjFi7BWYvifQxSLQQuQVmE8FPvESQw3ChQosVKMNDwxiCSneorKbw94jOb/WNNbx7N+X9Yzh/fv+MYeJ7SNGLY6EdDXzjhY6Gvj+sIGnhm113zJ9qcLiOEKAKkgZDQHIQAmWSZZpoDUrQEEGoI/UGoI7o9Et1fnE1TNKqJ0qoSomkTFMsUNKFVcI2p+kKGoBE7U2cGyVYBGRkOHGrFXxtLdOrrhJNPs4RlhpGvHJ8qT2KSSu1uW5M8tKlE/wDNlE8f8Ub+UH7sJCsMgMSEDhR9TzqDGZs04LZUzBIaWfATBrFmVfKJjAVjkwGYpiqhBJppk+nEc4o9jq5H1I34fVGju6eOkmJUDDNnggg1NZYORG/P0iGzbYy3stoUhg71VBTXFLybuAPujNC0TPaTWcS1ZizNXCASAKA66AaQNW+ZSnDKBP8AmkDI8VQ/GIW2iMfESU5Jt933CEyY+Cs2YEl9+pIFKKNTygVbbdjQyZStgYipYmrEGoooyXTnBB9mprUnTJodWHbNcXLBu13GkBbwvR5QpIlNLXTpWALndyT3xMI29NRWbLKXWmSmxqhDWmZQnRScUwjdroOcaa4WlnJFAHmTzO+PN1UuxJJJOpNSSe86wbuuRPlEFGKNUUHedKqf6RfJitbioZNdj0ba00u6b3lPeR8YA3ev93N3so82g1tcG/6PoR1iZdQOIzMBnlkXZSmZZB5mM8eyvUa936Fe33uEmTgOuWmPoerQyxLriGu85ecC5aTJxVc2oAqqNABkKDj36wf2Z2Hn2mjEYE3s3wG8/vKPVrh2akWQDo1Bbe5HW8OEOx46VR2Fzmk7e5i9lvk7bKZaSU3hFNG8T9H38o9JlSwqhVFAAABwAFBHRMcM0aYwUdhEpuW50TEbNHDTIiaZFipKWiNmiJpkcGZEEkuKC+z4zc8h74Aho0Ozo6jHi3uH9YFuQwtChQ0XKlGFCEKIJIrQtVYcQR6RmZktgaEU4gjh+x5RqTHmm2W0Fs+gglSwcmADk04sRReVBGbiIp1b1HYmzRrvhDWMTdW3YHVtKU/zEFR+JNR4V5Rr7FbJc0B5bq68VNR48D3RkaaHnmO1NqK2i0Siz4ZkvCQHooAmhjVQuJQQpBwnMZGlawEvm2fOBgXsmY01qAKMTMSAMOutSampMHdsLqebbWwrlhzJ7I675muUDJ1okSMl9u/dlKU8/peGUNjLRJA14kNisb9HhJpLBqWbIeLHcI4mXjLl5SV6VvrMOoOS6tEZlz7SaseqN3Zlr4afGLVpkJZVJC9JMFMmBCAlC4NNWyHqImvHUs5Sa9F7IrWe7Z9rcFyTU0BbJR3Kv6Q21NxiyTJSDVlxN44SMt2segbPIrWaTPdUaYR2iBljnIq4RuoCaGM58qIraJR/y/dhheDN0j00VtfIrkhymkusKZEnHUrhetASaBa5AAknwjL3JMlic80YxLM2YwqBNlFWdqYsNcJpSoqI1F2KehkBaV63aJApQV0BzpupDTPmdnZpqywrUKFz2WqDiCoD1jQnjv0qYdw6q2LzPZArbLZ2WE+eWVbMsh8COZbElXatSqqKCuQpxGmcYeezMRQnEKEUOh1BLcR3QbvC3zLSJcsIBhDqSgo0xWaq467xprvMazZb5Omej2nqJuX6RHI6ePlF27ehCVLUKbH3ilqeWuEnCHLKy1FMBHIipjWHZ2z1B6MAA4sI7Fdxw/DSLlgu+XIXBKQKO7U8zvicmLwxKMaZSeRt2hgABQCgG4aCGLQzNEEyZDRZ27xXmTYimzopzbRABZebEDT4HzbV3xUtF4qgqx5DeeQgq9gugzMtAAJJAA1JyAgNatp5a9lWbvyA8K5nyjPXjezTdR1dwOnlvPOBs20cM/d6Rohg/kIlm/ibax7TSW7RKfe08xHoNxOBIDVyJJB1rnQU46R4C8ympj1P5O7a82xKtadGzpjyJpXEAg3Gjanu10EZMSjqiceRy0ZuPnH2W9P1hQN+ZLwf/wByb/uhQkaWRChoeABRkbQvaHeffGujLW4UmOPtN76xl4nZDsO7MzeOysicCVHRtxUdXxX9KRkrVcNrsbdJLZh9uWaj8S/7hSPS5YjpYyqTQ88jt0+02puuxNdVUYVPeQPjlEtz3XJM0S2YM+9VzC82490WPlUtDSpqJLOBHxFwtFxEBKVIz3nnAvYU/wBoXkY2YMXOk3sZuIzuCajuavay6BJsM04q9eXkFAUL0iZU1zDZ55wCvkB0n4mC4ZNlcE1JZmspOEbs8XpG0+UAf3dPPDoj/wDLJ/SMRfUv2M16H/h7LnUYRhs0pc/EsMu+JtKOvi1/2aROFPJ8Ur+SNXdjYbHYx9drOvpNnfywE+Uazs06WQCQEoTwrT9DF622wSpV3Bslxhyc8ujsyy/fO9Y3ezqy53TVCzEYSsjRlOTxg4SDqPnb+bbNOWWsn+dxgL0tDS7FLZAC1QBXTPCMxv5RTuPZW1WxsTVpoXfIAcBw5AeEerPsxZyVqpwqahK9WuXjTLSsF5aBQAoAA0AFAOQjZDDJaMTLKt0A9n9lZFkAKrife5G/7I3e+DhhExG7RpSSWghtvcdjETvHDzIrTZ0BBJNmxSnT4in2iBlotcBJYtFqgbPtkULXbu+A1qt1f0/WLxg5bFJTUdwla7ypofH96wGnW0sTTzOsV5j13QwGUa4Y1Eyzm5DsaxyzUEO0QzGyi5UkawNMRWRxmK56csot3VbbxsjD5u4C6lcSsjNoThO+lM8jHGz7HomoK0ZhT+L+aCYlkns65+kcbJxWSE3F66nex8HinCMkqtBL/r7e3/LkeQ/3QoGfN24ekKF/5kvBF/8AAx+LPaRDxyI6EbDmDxlr2ymvzHqAfjGogNe91s7F0zJpVeQpkYTng5R0GYpJPUESDHYEKVLKmhFDwOUPGA0mA+UW62tE+QilAxDEFzRclrr4QPsOznzPo7QZuKk1EKrLbDhmIWrjOtDTQQc27tps86zzgMWGoK4itcSTV7QGW4+EZe139NnIEwogBQgjEZlZYy65PpSLwnljOPL2e/56+xGS5Y3DxN9tmFa7bRU9UrLzFK0xAmlcq0UxhJlsJMsSCT7GUAXCs1eiQVZSCMaka8RBy7bHbbeBLJPR0UNlRerWhbv6x9Mso9A2e2PkWUAkB5n1iMge4fE+kaUnK0vFu/jYrH+kle5jrh2JnWjC9pYrLAGEHWmXZXdoM9Ocei3XdUqzJglIFG872I3kxejkmHY8UYbC55HIRjgmEzRC7wwoO7xXmTY4mzIpzp0AEk2dFGfaKRBabVSBFrtvfEEk1rtkB7RbK5RStltroad+/wABA2ZN8v3qYfDC3uJllS2Ib4t7q2anAN+6p4mGsVpWZoc+G+JFSBdolCTNlzEFAWowGlToQN2/yjRFcugiT5g1Nl003RGhizaDUV4xXAoIY0LT0OGitOiZmipanoIqy6CGzbdR9e23uSDcuZr+ndGf2Tess/fevkkGjShoT6R57if3ZHp+F/aj6EvS949YUDsXeYaE8o893EdRwsdCOueeHhjDwjABBPs6v2h47x4wJtd2Mua9Yeo8N8HDDQueKM9y0ZuJ5Rt3dj2gyUlrVsWnLFu13wX2a+TxJYDWjM64R8SNPDPvEbzolxYsIxUpWgrTnHcLhgS31GSzN7EUiQqKFRQqjQAUAjsw5jgmNAkRMRs0MzRBMmQAPMmRUmzYabNihaLTAB3Pn0gXarZENrtcZ+33huXM7ydB+p7olRbdIhySVstW23gfAbzAW1WuuufduHPiYrzppO/+sQ0jVjxKOrM08rloh3qdYdUjpBCYw6hIwMDb5zT8S+/+sXXMDr2b2f4l+MRLYtHcLI9QOUcTTHEhshHM54uURE7QOvOdRf3nFm1TwgqczuHGBc1S5xN4DcB3QuQ2Ic2PNJWeuJzupov6QbyINKa/vfFDZtAsoVy8qGrV91IvGaKGlaV18THn8+uSXqem4dVij6EXRDiIUcfOP31YULpjbR7sI7EKFHUOAPChQokBjChQoAGjmFCgA5aI3h4UAEDRVmw8KAChPgVa4UKAALbN8Zv6C8vjDwo0YO8Rn7iBo7TQQoUaTMOI5aFCiQIZkDL5/wANua+8Q0KKS2Lx3CFn0EcPr4woUXZRA28/8T8I+MRboUKKPcZ3Ghk/4a/d/lgBatT4woUczhe2/U7fF/tIqQoUKOgcY//Z",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md"
              >
                <h2 className="text-2xl font-serif font-bold mb-2">{card.title}</h2>
                <h4 className="text-gray-600 dark:text-gray-300 mb-4">{card.desc}</h4>
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-md w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Work Together */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-2">Let’s work together</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Want to discuss an opportunity to create something great?
              I am ready when you are.
            </p>
          </div>
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            Get in touch
          </button>
        </div>
      </section>

    </div>
  );
}

export default Home;
