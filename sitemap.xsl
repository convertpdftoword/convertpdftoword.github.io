<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap – PDFWordPro</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Outfit:wght@600;700;800&amp;display=swap" rel="stylesheet" />
        <style type="text/css">
          :root {
            --primary: #6366f1;
            --primary-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
            --bg-base: #f8fafc;
            --bg-surface: #ffffff;
            --text-main: #0f172a;
            --text-muted: #64748b;
            --border-color: #e2e8f0;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: var(--bg-base);
            color: var(--text-main);
            padding: 40px 20px;
            line-height: 1.5;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          .header-box {
            background: var(--bg-surface);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            padding: 32px;
            margin-bottom: 28px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
            position: relative;
            overflow: hidden;
          }
          .header-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: var(--primary-gradient);
          }
          .brand-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
            flex-wrap: wrap;
            gap: 12px;
          }
          .brand-title {
            font-family: 'Outfit', sans-serif;
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--text-main);
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .brand-title span.highlight {
            background: var(--primary-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .badge-counter {
            background: rgba(99, 102, 241, 0.1);
            color: var(--primary);
            border: 1px solid rgba(99, 102, 241, 0.25);
            padding: 6px 16px;
            border-radius: 30px;
            font-weight: 700;
            font-size: 0.88rem;
          }
          .header-desc {
            color: var(--text-muted);
            font-size: 0.96rem;
            max-width: 800px;
            line-height: 1.6;
          }
          .header-desc a {
            color: var(--primary);
            text-decoration: none;
            font-weight: 600;
          }
          .header-desc a:hover {
            text-decoration: underline;
          }
          .table-box {
            background: var(--bg-surface);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 0.92rem;
          }
          thead th {
            background: #f1f5f9;
            color: #334155;
            font-weight: 700;
            font-size: 0.82rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 16px 20px;
            border-bottom: 1px solid var(--border-color);
          }
          tbody tr {
            border-bottom: 1px solid var(--border-color);
            transition: background-color 0.15s ease;
          }
          tbody tr:last-child {
            border-bottom: none;
          }
          tbody tr:hover {
            background-color: #f8fafc;
          }
          td {
            padding: 14px 20px;
            vertical-align: middle;
          }
          .col-index {
            color: var(--text-muted);
            font-size: 0.84rem;
            width: 50px;
            text-align: center;
          }
          .col-url a {
            color: #2563eb;
            text-decoration: none;
            font-weight: 500;
            word-break: break-all;
          }
          .col-url a:hover {
            color: #1d4ed8;
            text-decoration: underline;
          }
          .col-priority {
            width: 110px;
            text-align: center;
          }
          .priority-pill {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 20px;
            font-weight: 700;
            font-size: 0.8rem;
          }
          .p-high {
            background: #ecfdf5;
            color: #059669;
            border: 1px solid #a7f3d0;
          }
          .p-mid {
            background: #eff6ff;
            color: #2563eb;
            border: 1px solid #bfdbfe;
          }
          .p-low {
            background: #f8fafc;
            color: #64748b;
            border: 1px solid #e2e8f0;
          }
          .col-changefreq {
            color: var(--text-muted);
            text-transform: capitalize;
            font-size: 0.88rem;
            width: 120px;
            text-align: center;
          }
          .col-lastmod {
            color: var(--text-muted);
            font-size: 0.88rem;
            white-space: nowrap;
            width: 130px;
            text-align: center;
          }
          .footer-note {
            text-align: center;
            margin-top: 24px;
            color: var(--text-muted);
            font-size: 0.85rem;
          }
          .footer-note a {
            color: var(--primary);
            text-decoration: none;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header-box">
            <div class="brand-row">
              <div class="brand-title">
                PDF<span class="highlight">Word</span>Pro XML Sitemap
              </div>
              <div class="badge-counter">
                Total URLs: <xsl:value-of select="count(sitemap:urlset/sitemap:url)" />
              </div>
            </div>
            <p class="header-desc">
              This XML Sitemap is generated according to the official <a href="https://www.sitemaps.org" target="_blank" rel="noopener">sitemaps.org</a> protocol. It allows search engines like Google, Bing, and Yandex to discover and crawl all accessible pages, tools, and guides on this site.
            </p>
          </div>

          <div class="table-box">
            <table>
              <thead>
                <tr>
                  <th class="col-index">#</th>
                  <th>URL</th>
                  <th class="col-priority">Priority</th>
                  <th class="col-changefreq">ChangeFreq</th>
                  <th class="col-lastmod">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td class="col-index">
                      <xsl:value-of select="position()" />
                    </td>
                    <td class="col-url">
                      <a href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc" />
                      </a>
                    </td>
                    <td class="col-priority">
                      <xsl:choose>
                        <xsl:when test="sitemap:priority &gt;= 0.9">
                          <span class="priority-pill p-high">
                            <xsl:value-of select="sitemap:priority" />
                          </span>
                        </xsl:when>
                        <xsl:when test="sitemap:priority &gt;= 0.8">
                          <span class="priority-pill p-mid">
                            <xsl:value-of select="sitemap:priority" />
                          </span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="priority-pill p-low">
                            <xsl:value-of select="sitemap:priority" />
                          </span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td class="col-changefreq">
                      <xsl:value-of select="sitemap:changefreq" />
                    </td>
                    <td class="col-lastmod">
                      <xsl:value-of select="sitemap:lastmod" />
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <div class="footer-note">
            &#169; 2026 PDFWordPro. 100% Client-side. <a href="./en/">Home</a> • <a href="./all-tools.html">All 33 Tools</a> • <a href="./articles/">Guides</a>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
