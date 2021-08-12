import { useState } from "react";
import { CdtsProvider, DefaultLayout } from "wet-boew-react";

function App() {
  const [showSearch, setShowSearch] = useState(true);
  const [showSiteMenu, setShowSiteMenu] = useState(true);
  const [showPreContent, setShowPreContent] = useState(true);
  return (
    <CdtsProvider>
      <DefaultLayout
        title="Home"
        onSearchClick={showSearch ? (q) => console.log(q) : undefined}
        showSiteMenu={showSiteMenu}
        showPreContent={showPreContent}
      >
        <fieldset>
          <legend>Layout Options</legend>
          <input
            type="checkbox"
            checked={showSearch}
            onChange={() => setShowSearch(!showSearch)}
            value="Search"
          />

          <input
            type="checkbox"
            checked={showSiteMenu}
            onChange={() => setShowSiteMenu(!showSiteMenu)}
            value="Site Menu"
          />

          <input
            type="checkbox"
            checked={showPreContent}
            onChange={() => setShowPreContent(!showPreContent)}
            name="Pre Content"
          />
        </fieldset>
      </DefaultLayout>
    </CdtsProvider>
  );
}

export default App;
