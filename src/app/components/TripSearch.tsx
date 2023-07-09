'use client'

export function TripSearch() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-2xl text-primary-purpleDark text-center">Encontre sua próxima <span className="text-primary-purple">viagem!</span></h1>

      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
        <input type="text" name="location" id="location" className="border border-primary-grayLighter rounded-lg px-4 py-2 text-sm" />
        <input type="text" name="startDate" id="startDate" className="border border-primary-grayLighter rounded-lg px-4 py-2 text-sm" />
        <input type="text" name="endDate" id="endDate" className="border border-primary-grayLighter rounded-lg px-4 py-2 text-sm" />
        <button type="submit" className="flex-1 bg-primary-purple rounded-lg font-semibold text-sm text-white py-2">Pesquisar</button>
      </form>
    </div>
  )
}


