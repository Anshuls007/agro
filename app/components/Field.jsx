export default function Field({
  as: As = "input",
  id,
  label = null,
  className = "",
  disabled = false,
  postfixText = null,
  ...otherProps
}) {
  return (
    <fieldset
      className="w-full flex flex-col items-stretch border border-gray-400 rounded-xl px-2 py-2 justify-start gap-1 disabled:opacity-60 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      {label ? (
        <label htmlFor={id} className="font-medium text-sm">
          {label}
        </label>
      ) : null}
      <div className="flex items-center">
        <As
          id={id}
          className={[
            "bg-white w-full font-medium px-4 py-2 rounded-lg text-black",
            className,
          ].join(" ")}
          {...otherProps}
        />
        {postfixText && <p className="font-medium text-lg">{postfixText}</p>}
      </div>
    </fieldset>
  );
}
