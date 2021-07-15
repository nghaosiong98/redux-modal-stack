type State = Readonly<{
  modals: ReadonlyArray<Modal>;
}>;

interface WrapModal<P> {
  Modal: React.ComponentType<P>;
  id: string;
  props?: P;
}
