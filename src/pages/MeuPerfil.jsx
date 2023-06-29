export const MeuPerfil = () => {
    return (
        <header className="bg-slate-400 flex flex-col justify-center items-center h-full">

            <div className="bg-slate-50  flex flex-col justify-center text-center pt-12 items-center h-full w-auto">

                <div className="bg-[url('assets/img/Perfil.jpg')]  flex-none bg-cover w-40 h-40 bg-bottom rounded-full  border-2 border-gray-500"> </div>

                <div className="pt-4 flex-1  ">
                    <div className=" text-sm flex flex-col ">
                        <p className="text-lg font-bold flex-">Bernardo Santos </p>
                        <p className="flex-1 -mt-10">Programador | Desenvolvedor</p>
                        <div className="text-[8px] ">Contato: <span className="font-semibold">bernardosantosmagalhaesm@gmail.com</span></div>
                    </div>
                </div>

                <div className=" w-full p-4 flex flex-col flex-1">
                    <a className=" bg-slate-400 mb-4 p-2 shadow-lg shadow-indigo-500/40 rounded-3xl text-base font-bold border-yellow-400 border-2 border-solid" href="https://github.com/BernardoSant">Curriculo</a>

                    <a className=" bg-slate-400 mb-4 p-2 shadow-lg shadow-indigo-500/40 rounded-3xl text-base font-bold border-yellow-400 border-2 border-solid" href="https://www.linkedin.com/in/bernardo-santos-magalhaes/">Linkedin</a>

                    <a className=" bg-slate-400 mb-4 p-2 shadow-lg shadow-indigo-500/40 rounded-3xl text-base font-bold border-yellow-400 border-2 border-solid" href="https://github.com/BernardoSant">GitHub</a>

                    <a className=" bg-slate-400 mb-4 p-2 shadow-lg shadow-indigo-500/40 rounded-3xl text-base font-bold border-yellow-400 border-2 border-solid" href="https://www.instagram.com/bernardo_santos.m/">Instagram</a>
                </div>


                <div className="flex justify- items-end flex-1 h-auto">
                    <p className="text-[9px] text-white bg-slate-500  font-thin px-6 h-auto">
                        Tudo posso Naquele que me fortalece! - &copy; 2023 - Bernardo Santos. Todos os direitos Reservados.
                    </p>
                </div>
            </div>



        </header>
    )
}