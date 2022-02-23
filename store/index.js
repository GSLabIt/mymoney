import create from 'zustand';

const useStore = create(set => ({
  issign: false,
  isshow: true,

  press: () => set(state => ({issign: !state.issign})),
  show: () => set(state => ({isshow: !state.isshow})),
}));

export default useStore;
