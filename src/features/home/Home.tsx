import { FormattedMessage } from "react-intl";

export default function Home() {
  return (
    <>
      <div>
        <h1>
          <FormattedMessage id="app.home-page.header" />
        </h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <div>
          <div>
            <h1>
              <FormattedMessage id="app.home-page.body.header1" />
            </h1>
          </div>
          <div className="my-8">
            <FormattedMessage id="app.home-page.body.body1" />
          </div>
        </div>
        <div>
          <div>
            <h1>
              <FormattedMessage id="app.home-page.body.header2" />
            </h1>
          </div>
          <div className="my-8">
            <FormattedMessage id="app.home-page.body.body2" />
          </div>
        </div>
        <div>
          <div>
            <h1>
              <FormattedMessage id="app.home-page.body.header3" />
            </h1>
          </div>
          <div className="my-8">
            <FormattedMessage id="app.home-page.body.body3" />
          </div>
        </div>
        <div>
          {" "}
          <div>
            <h1>
              <FormattedMessage id="app.home-page.body.header4" />
            </h1>
          </div>
          <div className="my-8">
            <FormattedMessage id="app.home-page.body.body4" />
          </div>
        </div>
      </div>
    </>
  );
}
