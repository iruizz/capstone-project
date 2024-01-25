export default function DatahubLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <h2 className="text-center my-2">Data hub</h2>
        {children}
      </section>
    )
  }