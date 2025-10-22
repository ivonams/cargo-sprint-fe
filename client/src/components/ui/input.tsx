import * as React from "react"
import { Search, X, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  supportingText?: string
  error?: boolean
  showSearchIcon?: boolean
  showClearIcon?: boolean
  onClear?: () => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type, 
    label,
    supportingText,
    error = false,
    showSearchIcon = false,
    showClearIcon = true,
    onClear,
    value,
    disabled,
    ...props 
  }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const hasValue = value !== undefined && value !== ''

    const handleClear = (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (onClear) {
        onClear()
      }
    }

    return (
      <div className="w-full">
        <div className="relative">
          {label && (
            <label
              className={cn(
                "absolute left-10 transition-all duration-200 pointer-events-none text-body-md",
                (isFocused || hasValue)
                  ? "top-0 -translate-y-full text-label-sm text-muted-foreground mb-1"
                  : "top-1/2 -translate-y-1/2 text-muted-foreground",
                disabled && "opacity-50"
              )}
            >
              {label}
            </label>
          )}
          
          <div className="relative flex items-center">
            {showSearchIcon && (
              <Search 
                className={cn(
                  "absolute left-3 h-5 w-5 text-muted-foreground",
                  disabled && "opacity-50"
                )} 
              />
            )}
            
            <input
              type={type}
              className={cn(
                "flex w-full rounded-md border bg-background text-body-md transition-colors",
                "h-[32px] px-[10px] py-1",
                "placeholder:text-muted-foreground",
                "focus-visible:outline-none focus-visible:border-primary focus-visible:border-2",
                "hover:border-neutral-60",
                "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-background",
                error 
                  ? "border-error-40 border-2 focus-visible:border-error-40" 
                  : "border-neutral-80",
                className
              )}
              ref={ref}
              value={value}
              disabled={disabled}
              onFocus={(e) => {
                setIsFocused(true)
                props.onFocus?.(e)
              }}
              onBlur={(e) => {
                setIsFocused(false)
                props.onBlur?.(e)
              }}
              {...props}
            />
            
            {showClearIcon && hasValue && !disabled && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 p-1 hover:bg-neutral-95 rounded-full transition-colors"
                tabIndex={-1}
              >
                {error ? (
                  <AlertCircle className="h-5 w-5 text-error-40" />
                ) : (
                  <X className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
            )}
          </div>
        </div>
        
        {supportingText && (
          <p 
            className={cn(
              "mt-1 text-label-md",
              error ? "text-error-40" : "text-muted-foreground",
              disabled && "opacity-50"
            )}
          >
            {supportingText}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
