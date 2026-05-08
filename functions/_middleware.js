export async function onRequest(context) {
  const response = await context.next();
  let html = await response.text();

  // 获取请求路径
  const url = new URL(context.request.url);
  const path = url.pathname;

  // 根据路径决定 canonical URL
  let canonicalUrl = 'https://www.nolvocn.com/';
  if (path === '/' || path === '') {
    canonicalUrl = 'https://www.nolvocn.com/';
  } else if (path.startsWith('/model')) {
    canonicalUrl = 'https://www.nolvocn.com/model';
  } else if (path.startsWith('/solutions')) {
    canonicalUrl = 'https://www.nolvocn.com/solutions';
  } else if (path.startsWith('/partners')) {
    canonicalUrl = 'https://www.nolvocn.com/partners';
  } else if (path.startsWith('/contact')) {
    canonicalUrl = 'https://www.nolvocn.com/contact';
  }

  // 替换 canonical 标签
  html = html.replace(
    /<link rel="canonical" href="[^"]*" id="canonical-link">/,
    `<link rel="canonical" href="${canonicalUrl}" id="canonical-link">`
  );

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}