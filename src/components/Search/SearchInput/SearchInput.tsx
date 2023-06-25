import { useSearch } from '../../../hooks/useSearch'

export const SearchInput = () => {
  const { handleSearchValue, handleSearchResult, search, handleOpenAutoComplete } =
    useSearch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchValue(e.target.value)
  }
  return (
    <div className="w-[100%] flex items-center gap-3">
      <input
        value={search}
        onChange={handleChange}
        onFocus={() => handleOpenAutoComplete(true)}
        type="search"
        className="text-white focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-4 py-2 bg-secondary hover:bg-secondary-400 focus:ring-secondary-500 transition-colors w-[100%]"
        placeholder="Search hope, lovely..."
        required
      />
      <button
        onClick={() => {
          handleSearchResult()
          handleOpenAutoComplete(false)
        }}
        type="submit"
        className="text-white focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-4 py-2 bg-secondary hover:bg-secondary-400 focus:ring-secondary-500 transition-colors"
      >
        Search
      </button>
    </div>
  )
}
