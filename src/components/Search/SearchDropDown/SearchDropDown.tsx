import { useEffect, useState } from 'react'
import { useSearch } from '../../../hooks/useSearch'

export const SearchDropDown = () => {
  const { handleSearchValue, searchAutoComplete, canOpenAutoComplete } =
    useSearch()

  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    console.log(canOpenAutoComplete)

    if (canOpenAutoComplete) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [canOpenAutoComplete])

  return (
    <section className="w-[100%] relative">
      {searchAutoComplete.length > 0 && open && (
        <div className="bg-secondary-natural-400 rounded-md mt-5 px-3 py-4  absolute top-0 left-0 w-[100%] z-30">
          {searchAutoComplete.map((item, i) => (
            <div
              key={`${i}-${item.term}`}
              className="my-2 py-1 rounded-md px-4 bg-secondary-400 cursor-pointer"
              onClick={() => {
                setOpen(false)
                handleSearchValue(item.term)
              }}
            >
              <p>{item.term}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
