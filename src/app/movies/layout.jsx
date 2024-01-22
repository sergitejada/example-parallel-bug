export default function Layout({ children, modal = null }) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
