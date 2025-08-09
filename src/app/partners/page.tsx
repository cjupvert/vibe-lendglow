export default function Partners() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-foreground">Partners</h1>

      <div className="mt-8 bg-sidebar-bg rounded-lg border border-border-color p-6">
        <p className="text-gray-300 text-lg leading-relaxed">
          <span className="text-primary-green font-semibold">@sody</span> This
          page will look the exact same as the Clients page. Should we merge
          these two into the same page? with each person in the table being
          classified as a "Client" or a "Partner"?
          <br />
          <br />
          Or are these two completely different concepts where they should be
          separated?
        </p>
      </div>
    </div>
  );
}
