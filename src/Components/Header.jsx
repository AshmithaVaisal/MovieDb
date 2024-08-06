

export const Header = () => {

  return (
    <>
      <div className="bg-cyan-700 p-4 border">
        <div className="flex align-center justify-between">
          <h1 className="text-3xl text-white" >Top Rated Movie List</h1>
          <input className="text-xl border bg-grey-200 p-2 rounded-lg border-none focus:outline-none w-80" type="text" placeholder="Search"  />          
        </div>  
      </div> 
   
    </>
  )
}
