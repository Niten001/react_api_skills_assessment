import Head from 'next/head';

interface PageProps {
  description?: string;
  title?: string;
  icon?: string;
  children?: React.ReactNode;
}

export default function Page({ description, title, icon, children }: PageProps): JSX.Element {
  return (<>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {description == null ? <></> : <meta name="description" content="${this.props.description}" />}
      {title == null ? <></> : <>
        <meta name="title" content={title} />
        <title>{title}</title>
      </>}
      {icon == null ? <></> : <link rel="icon" href={icon} />}
    </Head>
    {children}
  </>);
}
