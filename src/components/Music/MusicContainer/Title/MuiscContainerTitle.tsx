import { Dispatch, FC, SetStateAction, memo } from 'react'
import { Button } from '../../../Button/Button'

interface Props {
  total?: number
  count?: number
  setCount?: Dispatch<SetStateAction<number>>
  title: string
}

export const MuiscContainerTitle: FC<Props> = memo(
  ({ title, setCount, total, count }) => {
    return (
      <section className="flex justify-center items-center w-[100%] text-white">
        <div className="flex justify-between items-center w-[80%] md:w-[90%] lg:w-[95%] xl:w-[92%] 2xl:w-[74%]">
          <h4 className="text-xl font-semibold md:text-3xl">{title}</h4>
          {total && total > 6 ? (
            <Button
              onClick={() => {
                setCount &&
                  count &&
                  total &&
                  setCount(total && count === total ? 6 : total)
              }}
            >
              {total && count === total ? 'Show less' : 'Show more'}
            </Button>
          ) : (
            <></>
          )}
        </div>
      </section>
    )
  }
)
