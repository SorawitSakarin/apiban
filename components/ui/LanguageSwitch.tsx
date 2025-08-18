import { SwitchProps } from "@heroui/switch";
import { useSwitch } from "@heroui/react";
import { useEffect } from "react";
import { useLanguageStore } from "@/app/utils/store";
import { VisuallyHidden } from "@heroui/react";

export const LanguageSwitch = (props: SwitchProps) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  useEffect(() => {
    const language = isSelected ? "th" : "en";
    useLanguageStore.setState({ language });
  }, [isSelected]);

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
        >
          {isSelected ? <p>TH</p> : <p>EN</p>}
        </div>
      </Component>
    </div>
  );
};
