import { useState } from 'react'
import { useSearch } from '../../hooks/useSearch'
import { MusicContainer } from '../Music/MusicContainer/MusicContainer'
import { SearchDropDown } from './SearchDropDown/SearchDropDown'
import { SearchInput } from './SearchInput/SearchInput'
import { MuiscContainerTitle } from '../Music/MusicContainer/Title/MuiscContainerTitle'
import { MusicNotFound } from '../Music/MusicNotFound/MusicNotFound'

export const SearchContainer = () => {
  const { musics, search, loading } = useSearch()
  const [count, setCount] = useState<number>(6)

  return (
    <section className="text-white">
      <div className="flex justify-center gap-5 items-center mt-10">
        <div className="w-[90%] md:w-[60%]">
          <SearchInput />
          <SearchDropDown />
        </div>
      </div>
      <div className="mb-10 md:mb-0 mt-10">
        {musics && musics.length > 0 ? (
          <>
            <MuiscContainerTitle
              title="Search Results"
              count={count}
              total={musics.length}
              setCount={setCount}
            />
            <MusicContainer count={count} musics={musics} />
          </>
        ) : (
          <div>
            {search && !loading ? (
              <MusicNotFound/>
            ) : (
              <div className='flex justify-center items-center min-h-[75dvh]'>
                <div className='w-[90%] md:w-[40%]'>
                <img
                  src="https://res.cloudinary.com/dd39ktpmz/image/upload/v1687677239/euga7faviswrposnus5w.png"
                  alt="search for music"
                  width={'100%'}
                  height={'100%'}
                />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
