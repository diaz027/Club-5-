"use client";
import React, { useEffect, useState } from 'react';

const Calendar = () => {
  const [dias, setDias] = useState([]);
  const [mes, setMes] = useState(new Date().getMonth());//mes
  const [year, setYear] = useState(new Date().getFullYear());//año

  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  useEffect(() => {
    const days = [];
    const firstDayOfMonth = new Date(year, mes, 1).getDay();//meda el dia/mes/año actual
    const prevMonthLastDate = new Date(year, mes, 0).getDate();//vuelve para atras hasta su fecha actual
    const lastDayOfMonth = new Date(year, mes + 1, 0).getDate();//me muevo al proximo mes

    for (let i = 1; i <= firstDayOfMonth; i++) {
      days.unshift({ dia: prevMonthLastDate - i + 1, diaSemana: firstDayOfMonth - i, opacity: true });
    }

    for (let i = 1; i <= lastDayOfMonth; i++) {
      let fecha = new Date(year, mes, i);
      let diaSemana = fecha.getDay();
      days.push({ dia: i, diaSemana });
    }

    const lastDayOfWeek = days[days.length - 1].diaSemana;
    for (let i = 1; i <= 6 - lastDayOfWeek; i++) {
      days.push({ dia: i, diaSemana: lastDayOfWeek + i, opacity: true });
    }

    setDias(days);
  }, [mes, year]);

  const nextMonth = () => {
    if (mes === 11) {
      setYear(year + 1);
      setMes(0);
    } else {
      setMes(mes + 1);
    }
  }

  const prevMonth = () => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    if (mes === 0) {
      if (year !== currentYear) {
        setYear(year - 1);
        setMes(11);
      }
    } else {
      if (!(year === currentYear && mes === currentMonth)) {
        setMes(mes - 1);
      }
    }
  }

  return (
    <div className="bg-neutral-900 flex flex-col items-center  w-[27vw] rounded-2xl mx-auto md:mr-10 md:-mt-48">
      <h1 className="text-2xl font-bold mt-2 mb-4">Año: {year}</h1>
      <h1 className="text-2xl font-bold -mb-8"> {meses[mes]}</h1>
      <div >
        <button onClick={prevMonth} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-20"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m277.46-461.73 229.12 229.11L480-206.15 206.15-480 480-753.85l26.58 26.47-229.12 228.73h476.39v36.92H277.46Z" /></svg></button>
        <button onClick={nextMonth} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-20"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M682.54-461.73H206.15v-36.92h476.39L453.81-727.38 480-753.85 753.85-480 480-206.15l-26.19-26.47 228.73-229.11Z" /></svg></button>
      </div>
      <div className="bg-black grid grid-cols-7 mt-4 px-1 pb-6 rounded-b-2xl">
        {diasSemana.map((dia, index) => (
          <div key={index} className="text-center font-bold px-2 py-1">
            {dia}
          </div>
        ))}
        {dias.map((dia, index) => (
          <div key={index} className={`text-center flex ${dia.opacity ? 'opacity-50' : ''}`}>
            <button className='hover:bg-sky-600 rounded-[60%] mx-auto py-1 px-2'>
              {dia.dia.toString().padStart(2, 0)}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar;






// switch (month + 1) { // Modificado
//     case 2: { max = 28; break };
//     case 3: { max = 31; break };
//     case 4: { max = 30; break };
//     case 5: { max = 31; break };
//     case 6: { max = 30; break };
//     case 7: { max = 31; break };
//     case 8: { max = 31; break };
//     case 9: { max = 30; break };
//     case 10: { max = 31; break };
//     case 11: { max = 30; break };
//     case 12: { max = 31; break };
//     default: return;
//   };