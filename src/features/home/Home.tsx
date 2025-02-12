import { FormattedMessage } from "react-intl";

const cards = [
  {
    title: "app.home-page.body.header1",
    body: "app.home-page.body.body1",
  },
  {
    title: "app.home-page.body.header2",
    body: "app.home-page.body.body2",
  },
  {
    title: "app.home-page.body.header3",
    body: "app.home-page.body.body3",
  },
  {
    title: "app.home-page.body.header4",
    body: "app.home-page.body.body4",
  },
];

export default function Home() {
  return (
    <>
      <div className="mb-4">
        <h1>
          <FormattedMessage id="app.home-page.header" />
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
        {cards.map((card) => (
          <div className="rounded-lg border-2 border-gray-200 p-4">
            <div className="border-b-2 border-gray-200 pb-2">
              <h1>
                <FormattedMessage id={card.title} />
              </h1>
            </div>
            <div className="my-8">
              <FormattedMessage id={card.body} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
