import React from 'react'

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold text-violet-800">
          Cadastro Concluído!
        </h2>
        <p className="text-zinc-500 mt-4">
          Obrigado por se cadastrar no desafio
          <span className="font-bold text-violet-900 ml-2">
            Front end Fusion
          </span>
          .
        </p>
      </div>
    </div>
  )
}
