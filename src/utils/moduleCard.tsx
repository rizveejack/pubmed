type ModuleCardProps = {
  item: {
    id: number;
    name: string;
    module: string;
  };
};

export default function ModuleCard({ item }: ModuleCardProps) {
  return (
    <fieldset className="border text-center">
      <legend className="text-center font-medium">{item.name}</legend>
      <p className="text-sm p-2">{item.module}</p>
    </fieldset>
  );
}
