type State = Readonly<{
  modals: ReadonlyArray<Modal>;
}>;

type Modal = {
  Modal: React.ComponentType;
  id: string;
};
