import Card from './Card'
export default function NewsSection() {
  return (
    <section>
    <div className="container-fluid px-4 my-2 bg-black bg-gradient rounded-4 text-light border border-secondary">
        <h2 className="py-3 border-bottom">News & Events</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-stretch g-4 py-3">
            <div className="col">
                <Card
                    title="Short title, long jacket"
                    imageUrl="https://images.unsplash.com/photo-1698664683348-f9f35b809821?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    description="First Build"
                    date="09/05/23"
                />
            </div>
            <div className="col">
                <Card
                    title="Much longer title that wraps to multiple lines"
                    imageUrl="https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    description="RFA Sponsorship"
                    date="11/11/23"
                />
            </div>
            <div className="col">
                <Card
                    title="Another longer title belongs here"
                    imageUrl="https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    description="Setting Up Sensors"
                    date="1/15/24"
                />
            </div>
        </div>
    </div>
</section>
  );
}