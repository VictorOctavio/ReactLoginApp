import React from 'react'

interface InputProps {
    name: string,
    type: string,
    eventChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string,
    label: string
}

export const InputComponent: React.FC<InputProps> = ({
    name, type, eventChange, label, value
}) => {
  return (
    <div className="relative mb-6">
                <input
                  type={type}
                  className=" block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  name={name}
                  onChange={eventChange}
                  value={value}
                  />
                <label
                  htmlFor={name}
                  className="text-xs pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] "
                  style={{
                    backgroundColor: "#0f0f0f",
                    top: "-7px"
                  }}
                  >{label}
                </label>
              </div>
  )
}
