import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


interface InputFieldProps {
    label: string;
    id: string;
    type: string;
    placeholder?: string;
    accept?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
    label,
    id,
    type,
    placeholder,
    accept,
}) => (
    <div className="flex w-8/12 flex-col space-y-1">
        <Label htmlFor={id} className="pl-1.5 text-base">
            {label}
        </Label>
        <Input
            type={type}
            id={id}
            name={id}
            className="border p-2"
            placeholder={placeholder}
            accept={accept}
        />
    </div>
);