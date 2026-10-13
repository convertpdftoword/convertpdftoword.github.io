/**
 * PDFWordPro - Client-Side Engine
 * 100% In-Browser PDF to Word, Merge, Split, Image-to-PDF
 * Zero Server Uploads | High Performance | Privacy Focused
 * Supports 5 Languages: English (default), Japanese, Russian, French, Indonesian
 */

// Configure PDF.js Worker
if (window.pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// 5-Language Dictionary
const i18n = {
    en: {
        metaTitle: "Free Online PDF to Word Converter – Convert PDF to DOCX Fast & Secure",
        metaDesc: "Free client-side PDF to Word (.docx) converter without limitations. Super fast, 100% private in browser with zero server uploads.",
        navTools: "All Tools",
        navGuide: "How It Works",
        navSecurity: "Security",
        navFaq: "FAQ",
        badgeText: "100% Privacy Guaranteed: Processed Directly in Browser Without Server Upload",
        heroTitle: "Free Online PDF to Word Converter",
        heroSubtitle: "Convert PDF documents to editable Microsoft Word (.docx) files quickly, cleanly, and easily without file quotas or hidden fees.",
        tabPdf2Word: "PDF to Word (.docx)",
        tabPdf2Txt: "PDF to Text (.txt)",
        tabMerge: "Merge PDF",
        tabSplit: "Split PDF",
        tabImg2Pdf: "Image to PDF",
        dropzonePrompt: "Select or Drag & Drop PDF File Here",
        dropzoneSub: "Supports all PDF document files (No file size limits)",
        btnBrowse: "Choose PDF Document",
        btnChangeFile: "Change File",
        resultSuccess: "Conversion Complete!",
        resultSub: "Your file has been converted successfully and is ready to download.",
        btnDownload: "Download Document (.DOCX)",
        btnPreview: "Preview Extracted Text",
        btnAnother: "Convert Another File",
        previewPlaceholder: "Extracted text will appear here...",
        adTag: "ADVERTISEMENT",
        adHeaderDemo: "Top Banner Ad Space (Responsive Leaderboard 728x90)",
        adMiddleDemo: "In-Feed Display Ad Space (Responsive)",
        adBottomDemo: "Footer Display Ad Space (Responsive)",
        howTitle: "How to Convert PDF to Word in 3 Easy Steps",
        howSubtitle: "Fastest document conversion process without installing third-party software.",
        step1Title: "1. Upload PDF File",
        step1Desc: "Select your PDF from your computer or phone, or drag and drop into the upload box.",
        step2Title: "2. Automatic Processing",
        step2Desc: "The system parses pages in your browser, extracting text and reconstructing Word (.docx) styling.",
        step3Title: "3. Download Word Result",
        step3Desc: "Click download to instantly save your editable Word document ready for editing anytime.",
        featTitle: "Why Choose PDFWordPro Converter?",
        featSubtitle: "Top-tier document conversion solution built for speed, privacy, and ease of use.",
        feat1Title: "100% Privacy Protected",
        feat1Desc: "Your files are never transmitted to external servers. All processing executes strictly inside your browser.",
        feat2Title: "Ultra-Fast Speed",
        feat2Desc: "Without slow server uploads or network queues, conversions complete in a few moments.",
        feat3Title: "Always Free & Unlimited",
        feat3Desc: "No daily limits, no registration required, and no credit card needed. Use as much as you need.",
        feat4Title: "Editable DOCX Format",
        feat4Desc: "Output files work seamlessly in Microsoft Word, Google Docs, LibreOffice, and WPS Office.",
        feat5Title: "Universal Device Support",
        feat5Desc: "Runs smoothly on Windows, macOS, Linux, Android, iOS, and Chromebook via any modern browser.",
        feat6Title: "Complete PDF Suite",
        feat6Desc: "Includes PDF to Word, PDF to Text, Merge PDF, Split PDF pages, and Images to PDF in one application.",
        artTitle: "Complete Guide: How to Convert PDF to Word Without Losing Formatting",
        artP1: "The Portable Document Format (PDF) is universally acclaimed for sharing documents consistently across devices. However, when you need to revise text, update figures, or revise contracts, directly editing PDFs often requires expensive software licenses.",
        artP2: "With PDFWordPro, you can convert PDF files to Word (.docx) completely free right in your browser without downloading extra software or creating an account.",
        artH2Client: "Advantages of In-Browser Client-Side Conversion",
        artPClient: "Most online converters upload your confidential files to remote servers, risking data leaks. Our engine runs 100% inside your browser memory using modern web standards. Your files never touch any external server.",
        artH2Apps: "Supported Software for Converted (.DOCX) Files",
        artApp1: "Microsoft Word (2007 to Microsoft 365)",
        artApp2: "Google Docs (Freely upload to Google Drive and edit)",
        artApp3: "WPS Office (On PC, Android, and iOS)",
        artApp4: "LibreOffice & OpenOffice Writer on Linux, Mac, and Windows",
        faqTitle: "Frequently Asked Questions (FAQ)",
        faqSubtitle: "Answers to common questions regarding our PDF to Word conversion service.",
        faqQ1: "Is this PDF to Word conversion service really free?",
        faqA1: "Yes, it is 100% free forever without document limits, no hidden fees, and no sign-up or email needed.",
        faqQ2: "How is my document privacy and security guaranteed?",
        faqA2: "We use Client-Side Processing. Your documents are never uploaded to any remote server. Everything happens strictly inside your browser memory.",
        faqQ3: "Can it convert scanned PDFs to Word?",
        faqA3: "This converter extracts native text and vector fonts. For pure photographic scans (raster images), an OCR module is needed. Standard digital PDFs convert with high fidelity.",
        faqQ4: "Can I use this on mobile phones (Android / iPhone)?",
        faqA4: "Absolutely! The website is fully responsive and runs smoothly on Chrome, Safari, Firefox, and Edge on any smartphone.",
        footerTagline: "Fast, Free & Secure Client-Side Tools for PDF Conversion and Management.",
        footerColFeatures: "Features",
        footerColNav: "Navigation",
        footerCopy: "Engineered for high performance on GitHub Pages. Free to use.",
        // Tool configs
        tools: {
            pdf2word: {
                title: "PDF to Word Converter (.docx)",
                desc: "Extract text, paragraphs, and document structure into an editable Microsoft Word (.docx) file.",
                btnText: "Convert to Word Now",
                downloadLabel: "Download Document (.DOCX)"
            },
            pdf2txt: {
                title: "PDF to Text Converter (.txt)",
                desc: "Quickly extract clean raw text from PDF documents for notes, analysis, or data processing.",
                btnText: "Extract Text Now",
                downloadLabel: "Download Text (.TXT)"
            },
            merge: {
                title: "Merge PDF Documents",
                desc: "Combine 2 or more PDF files into a single organized document in your chosen order.",
                btnText: "Merge PDF Files",
                downloadLabel: "Download Merged PDF"
            },
            split: {
                title: "Split PDF Pages",
                desc: "Extract specific individual pages or custom page ranges into a brand new PDF file.",
                btnText: "Split Pages Now",
                downloadLabel: "Download Split PDF"
            },
            img2pdf: {
                title: "Images to PDF Converter",
                desc: "Turn your JPG or PNG photos and graphics into a high-quality PDF document instantly.",
                btnText: "Create PDF from Images",
                downloadLabel: "Download PDF"
            }
        },
        // Interactive UI texts
        analyzingFile: "Analyzing file...",
        pdfReady: "PDF Document Ready",
        pagesLabel: "Pages",
        filesSelected: "Files Selected",
        readyToMerge: "Ready to Merge",
        imageFile: "Image File",
        validDocNotice: "Valid document format. Files are processed locally without leaving your browser.",
        splitRangeLabel: "Page Range to Extract:",
        splitRangePlaceholder: "Example: 1-3, 5 (Leave blank for page 1)",
        splitRangeHelp: "Format: comma-separated page numbers or ranges (e.g. 1, 3, 5-7).",
        mergeOrderLabel: "Order of files to merge:",
        sizeLabel: "Size:",
        toastSelectFile: "Please select a file first!",
        toastSelectMin2: "Please select at least 2 PDF files to merge!",
        toastInvalidRange: "The page numbers you entered are invalid!",
        toastDocxLibError: "The docx library has not finished loading. Please check your internet connection.",
        toastSuccess: "Successfully converted! Click download to save your file.",
        toastError: "An error occurred while processing: "
    },

    ja: {
        metaTitle: "無料オンラインPDF Word変換 – 高速＆安全にDOCXへ変換",
        metaDesc: "制限なしの無料ブラウザ完結型PDF Word (.docx) 変換ツール。サーバー送信なし、100%安全で超高速。",
        navTools: "全ツール",
        navGuide: "使い方",
        navSecurity: "セキュリティ",
        navFaq: "よくある質問",
        badgeText: "100% プライバシー保護: サーバーへのファイル送信なしで安全に処理",
        heroTitle: "無料オンライン PDF Word 変換",
        heroSubtitle: "PDFドキュメントを素早く正確に編集可能なMicrosoft Word (.docx) ファイルに無制限・無料で変換します。",
        tabPdf2Word: "PDF → Word (.docx)",
        tabPdf2Txt: "PDF → テキスト (.txt)",
        tabMerge: "PDF 結合",
        tabSplit: "PDF 分割",
        tabImg2Pdf: "画像 → PDF",
        dropzonePrompt: "ここにPDFファイルを選択またはドラッグ＆ドロップ",
        dropzoneSub: "すべてのPDFファイルに対応（サイズ制限なし）",
        btnBrowse: "PDFドキュメントを選択",
        btnChangeFile: "ファイルを変更",
        resultSuccess: "変換が完了しました！",
        resultSub: "ファイルは正常に変換され、ダウンロード可能です。",
        btnDownload: "ドキュメントをダウンロード (.DOCX)",
        btnPreview: "抽出テキストをプレビュー",
        btnAnother: "別のファイルを変換",
        previewPlaceholder: "抽出されたテキストがここに表示されます...",
        adTag: "広告",
        adHeaderDemo: "ヘッダー広告スペース (レスポンシブ 728x90)",
        adMiddleDemo: "インフィード広告スペース (レスポンシブ)",
        adBottomDemo: "フッター広告スペース (レスポンシブ)",
        howTitle: "たった3ステップでPDFをWordに変換する方法",
        howSubtitle: "ソフトウェアのインストール不要で最速のドキュメント変換。",
        step1Title: "1. PDFファイルをアップロード",
        step1Desc: "パソコンやスマートフォンからPDFを選択するか、枠内にドラッグ＆ドロップします。",
        step2Title: "2. 自動処理",
        step2Desc: "ブラウザ内でページを瞬時に解析し、テキストを抽出してWord形式を再構成します。",
        step3Title: "3. Wordファイルをダウンロード",
        step3Desc: "ダウンロードボタンをクリックすると、編集可能なWordファイルがすぐに保存されます。",
        featTitle: "PDFWordProが選ばれる理由",
        featSubtitle: "スピード、安全性、使いやすさを極めた最新のドキュメント変換ソリューション。",
        feat1Title: "100% プライバシー保護",
        feat1Desc: "ファイルは外部サーバーに一切送信されません。すべての処理はお使いのブラウザ上で安全に完結します。",
        feat2Title: "超高速変換",
        feat2Desc: "クラウドへのアップロード・ダウンロード待機時間が不要なため、一瞬で変換が完了します。",
        feat3Title: "完全無料＆無制限",
        feat3Desc: "1日の上限なし、会員登録不要、クレジットカード不要。必要な時にいつでも何回でもご利用いただけます。",
        feat4Title: "編集可能なDOCX形式",
        feat4Desc: "出力ファイルはMicrosoft Word、Googleドキュメント、LibreOffice、WPS Officeで編集可能です。",
        feat5Title: "全デバイス対応",
        feat5Desc: "Windows、macOS、Linux、Android、iOS、Chromebookなど、あらゆる端末のブラウザで快適に動作します。",
        feat6Title: "充実のPDFツール集",
        feat6Desc: "PDFからWord、テキスト抽出、PDF結合、ページ分割、画像からPDFまで1つのサイトで完結。",
        artTitle: "完全ガイド: 書式を崩さずにPDFをWordに変換する方法",
        artP1: "PDF形式は端末を問わず正確に表示できるため書類の共有に最適です。しかし文章の推敲や修正が必要な場合、PDFを直接編集するには高価な専用ソフトが必要となります。",
        artP2: "PDFWordProを使用すれば、アカウント登録やソフト導入なしでブラウザから直接Word (.docx) に無料変換できます。",
        artH2Client: "クライアントサイド（ブラウザ内処理）のメリット",
        artPClient: "従来の変換サイトは機密ファイルを遠隔サーバーに送信する必要があり漏洩のリスクがありました。当ツールは100%お使いのブラウザメモリ上で処理され、ファイルが外部サーバーに送信されることは一切ありません。",
        artH2Apps: "変換後のDOCXファイルに対応するオフィスソフト",
        artApp1: "Microsoft Word（2007から最新のMicrosoft 365まで）",
        artApp2: "Google ドキュメント（Googleドライブにアップロードして即編集可能）",
        artApp3: "WPS Office（PC、Android、iOS端末）",
        artApp4: "LibreOffice / OpenOffice Writer（Linux、Mac、Windows）",
        faqTitle: "よくある質問 (FAQ)",
        faqSubtitle: "PDF変換サービスに関する一般的なご質問への回答です。",
        faqQ1: "このPDF変換サービスは本当に無料ですか？",
        faqA1: "はい、完全無料で永久にご利用いただけます。回数制限や隠れた料金はなく、会員登録やメールアドレスの入力も不要です。",
        faqQ2: "書類のプライバシーと機密情報はどのように保護されますか？",
        faqA2: "クライアントサイド処理を採用しています。ファイルはインターネット経由で外部サーバーに送信されず、すべてブラウザのメモリ内で処理されます。",
        faqQ3: "スキャンした画像PDFもWordに変換できますか？",
        faqA3: "本ツールは通常のテキストおよびフォントデータを抽出します。写真などのスキャン画像PDFはOCR認識が必要です。標準的なデジタルPDFはきれいに変換されます。",
        faqQ4: "スマートフォン（iPhone / Android）でも使えますか？",
        faqA4: "もちろんです！レスポンシブデザインに対応しており、スマートフォンのChrome、Safari、Firefox、Edgeで快適に動作します。",
        footerTagline: "PDFの変換・管理を素早く安全に無料で行うクライアントサイドツール。",
        footerColFeatures: "機能",
        footerColNav: "ナビゲーション",
        footerCopy: "GitHub Pages向けに最適化された高性能ツール。無料提供。",
        tools: {
            pdf2word: {
                title: "PDF → Word 変換 (.docx)",
                desc: "PDFからテキスト、段落、レイアウトを抽出して編集可能なWordファイルを作成します。",
                btnText: "Wordに変換する",
                downloadLabel: "Wordをダウンロード (.DOCX)"
            },
            pdf2txt: {
                title: "PDF → テキスト 変換 (.txt)",
                desc: "PDFドキュメントからプレーンテキストを高速抽出します。",
                btnText: "テキストを抽出する",
                downloadLabel: "テキストをダウンロード (.TXT)"
            },
            merge: {
                title: "PDF 結合 (Merge)",
                desc: "複数のPDFファイルを指定した順序で1つのファイルに結合します。",
                btnText: "PDFファイルを結合する",
                downloadLabel: "結合PDFをダウンロード"
            },
            split: {
                title: "PDF ページ分割 (Split)",
                desc: "指定したページやページ範囲を抽出して新しいPDFを作成します。",
                btnText: "ページを抽出・分割する",
                downloadLabel: "分割PDFをダウンロード"
            },
            img2pdf: {
                title: "画像 → PDF 変換",
                desc: "JPGやPNG画像をまとめて高画質なPDFドキュメントに変換します。",
                btnText: "画像からPDFを作成する",
                downloadLabel: "PDFをダウンロード"
            }
        },
        analyzingFile: "ファイルを解析中...",
        pdfReady: "PDFドキュメント準備完了",
        pagesLabel: "ページ",
        filesSelected: "ファイル選択済み",
        readyToMerge: "結合の準備完了",
        imageFile: "画像ファイル",
        validDocNotice: "有効なドキュメント形式です。ファイルはブラウザ外に送信されずローカルで処理されます。",
        splitRangeLabel: "抽出するページ範囲:",
        splitRangePlaceholder: "例: 1-3, 5 (空白の場合は1ページ目)",
        splitRangeHelp: "形式: カンマ区切りのページ番号または範囲 (例: 1, 3, 5-7)。",
        mergeOrderLabel: "結合するファイルの順序:",
        sizeLabel: "サイズ:",
        toastSelectFile: "最初にファイルを選択してください！",
        toastSelectMin2: "結合するには最低2つのPDFファイルを選択してください！",
        toastInvalidRange: "入力されたページ番号が無効です！",
        toastDocxLibError: "docxライブラリの読み込みが完了していません。接続を確認してください。",
        toastSuccess: "変換が完了しました！ダウンロードボタンを押して保存してください。",
        toastError: "処理中にエラーが発生しました: "
    },

    ru: {
        metaTitle: "Бесплатный онлайн-конвертер PDF в Word – Быстро и безопасно в DOCX",
        metaDesc: "Бесплатный конвертер PDF в Word (.docx) без ограничений. Супер быстрый и на 100% конфиденциальный в браузере.",
        navTools: "Все инструменты",
        navGuide: "Инструкция",
        navSecurity: "Безопасность",
        navFaq: "Вопросы и ответы",
        badgeText: "100% Конфиденциальность: Обработка прямо в браузере без отправки на сервер",
        heroTitle: "Бесплатный конвертер PDF в Word онлайн",
        heroSubtitle: "Преобразуйте документы PDF в редактируемые файлы Microsoft Word (.docx) быстро, точно и без ограничений по размеру и количеству.",
        tabPdf2Word: "PDF в Word (.docx)",
        tabPdf2Txt: "PDF в текст (.txt)",
        tabMerge: "Объединить PDF",
        tabSplit: "Разделить PDF",
        tabImg2Pdf: "Изображения в PDF",
        dropzonePrompt: "Выберите или перетащите PDF-файл сюда",
        dropzoneSub: "Поддерживаются любые PDF-файлы (без ограничения размера)",
        btnBrowse: "Выбрать PDF-документ",
        btnChangeFile: "Сменить файл",
        resultSuccess: "Конвертация завершена!",
        resultSub: "Ваш файл успешно преобразован и готов к скачиванию.",
        btnDownload: "Скачать документ (.DOCX)",
        btnPreview: "Предпросмотр текста",
        btnAnother: "Конвертировать другой файл",
        previewPlaceholder: "Извлеченный текст появится здесь...",
        adTag: "РЕКЛАМА",
        adHeaderDemo: "Рекламный блок в шапке (адаптивный 728x90)",
        adMiddleDemo: "Рекламный блок в контенте (адаптивный)",
        adBottomDemo: "Рекламный блок в подвале (адаптивный)",
        howTitle: "Как конвертировать PDF в Word всего за 3 простых шага",
        howSubtitle: "Быстрый процесс конвертации без установки сторонних программ.",
        step1Title: "1. Загрузите PDF-файл",
        step1Desc: "Выберите PDF-файл на компьютере или смартфоне, либо перетащите его в поле загрузки.",
        step2Title: "2. Автоматическая обработка",
        step2Desc: "Система обрабатывает страницы прямо в браузере, извлекая текст и структуру Word (.docx).",
        step3Title: "3. Скачайте результат Word",
        step3Desc: "Нажмите кнопку скачивания, и новый редактируемый документ Word готов к работе.",
        featTitle: "Почему выбирают PDFWordPro?",
        featSubtitle: "Лучшее решение для работы с документами: высокая скорость, безопасность и удобство.",
        feat1Title: "100% Конфиденциальность",
        feat1Desc: "Ваши файлы никогда не отправляются на удаленные серверы. Все операции выполняются локально в браузере.",
        feat2Title: "Мгновенная скорость",
        feat2Desc: "Без ожидания выгрузки в облако и обратного скачивания конвертация происходит за секунды.",
        feat3Title: "Бесплатно и без лимитов",
        feat3Desc: "Без дневных лимитов, без регистрации и без кредитных карт. Конвертируйте столько, сколько нужно.",
        feat4Title: "Редактируемый DOCX",
        feat4Desc: "Итоговые файлы полностью совместимы с Microsoft Word, Google Docs, LibreOffice и WPS Office.",
        feat5Title: "Поддержка любых устройств",
        feat5Desc: "Работает на Windows, macOS, Linux, Android, iOS и Chromebook в любом современном веб-браузере.",
        feat6Title: "Полный набор инструментов",
        feat6Desc: "Включает конвертацию в Word, текст, объединение PDF, разделение страниц и конвертер изображений в PDF.",
        artTitle: "Полное руководство: Как конвертировать PDF в Word без потери форматирования",
        artP1: "Формат PDF отлично сохраняет разметку, но прямое редактирование текста часто требует дорогостоящих платных редакторов.",
        artP2: "Благодаря PDFWordPro вы можете легко конвертировать PDF в Word (.docx) бесплатно прямо в браузере без регистрации и установки сторонних утилит.",
        artH2Client: "Преимущества клиентской обработки в браузере",
        artPClient: "Обычные сервисы требуют отправки документов на сторонние серверы. Наш движок выполняет всю работу на 100% локально в памяти вашего браузера. Документы остаются только на вашем устройстве.",
        artH2Apps: "Программы для работы с полученными файлами (.DOCX)",
        artApp1: "Microsoft Word (от 2007 до актуальной версии Microsoft 365)",
        artApp2: "Google Документы (просто загрузите на Google Диск для редактирования)",
        artApp3: "WPS Office (на ПК, Android и iOS)",
        artApp4: "LibreOffice и OpenOffice Writer на Linux, Mac и Windows",
        faqTitle: "Часто задаваемые вопросы (FAQ)",
        faqSubtitle: "Ответы на популярные вопросы о работе нашего конвертера PDF в Word.",
        faqQ1: "Этот сервис действительно полностью бесплатный?",
        faqA1: "Да, сервис на 100% бесплатный навсегда, без ограничений по количеству файлов, без скрытых платежей и без регистрации.",
        faqQ2: "Как обеспечивается конфиденциальность моих документов?",
        faqA2: "Мы используем клиентскую обработку: документы не загружаются на сервер, а обрабатываются исключительно локально в памяти вашего браузера.",
        faqQ3: "Можно ли конвертировать сканированные PDF в Word?",
        faqA3: "Конвертер извлекает встроенный текст. Для чисто фотографических сканов требуется OCR-распознавание. Стандартные цифровые PDF конвертируются отлично.",
        faqQ4: "Работает ли сервис на смартфонах (Android / iPhone)?",
        faqA4: "Конечно! Сайт полностью оптимизирован для мобильных браузеров Chrome, Safari, Firefox и Edge.",
        footerTagline: "Быстрые, бесплатные и безопасные инструменты для работы с PDF в браузере.",
        footerColFeatures: "Возможности",
        footerColNav: "Навигация",
        footerCopy: "Высокая производительность для GitHub Pages. Доступно бесплатно.",
        tools: {
            pdf2word: {
                title: "Конвертер PDF в Word (.docx)",
                desc: "Извлечение текста, абзацев и форматирования в редактируемый файл Microsoft Word (.docx).",
                btnText: "Конвертировать в Word",
                downloadLabel: "Скачать документ (.DOCX)"
            },
            pdf2txt: {
                title: "Конвертер PDF в текст (.txt)",
                desc: "Быстрое извлечение чистого текста из PDF для заметок, анализа и обработки данных.",
                btnText: "Извлечь текст",
                downloadLabel: "Скачать текст (.TXT)"
            },
            merge: {
                title: "Объединение PDF файлов",
                desc: "Соедините 2 или более PDF-файла в единый документ в нужном вам порядке.",
                btnText: "Объединить файлы PDF",
                downloadLabel: "Скачать объединенный PDF"
            },
            split: {
                title: "Разделение PDF страниц",
                desc: "Извлеките нужные страницы или диапазон страниц в новый отдельный PDF-файл.",
                btnText: "Разделить страницы",
                downloadLabel: "Скачать разделенный PDF"
            },
            img2pdf: {
                title: "Конвертер картинок в PDF",
                desc: "Превратите фотографии JPG и PNG в качественный PDF-документ за считанные секунды.",
                btnText: "Создать PDF из изображений",
                downloadLabel: "Скачать PDF"
            }
        },
        analyzingFile: "Анализ файла...",
        pdfReady: "PDF-документ готов",
        pagesLabel: "стр.",
        filesSelected: "Файлов выбрано",
        readyToMerge: "Готово к объединению",
        imageFile: "Файл изображения",
        validDocNotice: "Формат документа подтвержден. Файлы обрабатываются локально прямо в браузере.",
        splitRangeLabel: "Диапазон страниц для извлечения:",
        splitRangePlaceholder: "Пример: 1-3, 5 (пусто для стр. 1)",
        splitRangeHelp: "Формат: номера страниц через запятую или дефис (напр. 1, 3, 5-7).",
        mergeOrderLabel: "Порядок объединения файлов:",
        sizeLabel: "Размер:",
        toastSelectFile: "Пожалуйста, сначала выберите файл!",
        toastSelectMin2: "Выберите как минимум 2 PDF-файла для объединения!",
        toastInvalidRange: "Введен неверный диапазон страниц!",
        toastDocxLibError: "Библиотека docx еще не загрузилась. Проверьте интернет-соединение.",
        toastSuccess: "Успешно сконвертировано! Нажмите кнопку скачивания.",
        toastError: "Ошибка при обработке файла: "
    },

    fr: {
        metaTitle: "Convertisseur PDF en Word Gratuit en Ligne – DOCX Rapide & Sécurisé",
        metaDesc: "Convertisseur PDF en Word (.docx) gratuit et sans limite. Ultra rapide, 100% privé directement dans votre navigateur.",
        navTools: "Tous les outils",
        navGuide: "Comment ça marche",
        navSecurity: "Sécurité",
        navFaq: "FAQ",
        badgeText: "100% Confidentialité garantie: Traitement local sans envoi sur serveur",
        heroTitle: "Convertisseur PDF en Word Gratuit en Ligne",
        heroSubtitle: "Convertissez vos documents PDF en fichiers Microsoft Word (.docx) modifiables rapidement, proprement et gratuitement.",
        tabPdf2Word: "PDF en Word (.docx)",
        tabPdf2Txt: "PDF en Texte (.txt)",
        tabMerge: "Fusionner PDF",
        tabSplit: "Diviser PDF",
        tabImg2Pdf: "Image en PDF",
        dropzonePrompt: "Sélectionnez ou glissez-déposez le fichier PDF ici",
        dropzoneSub: "Prend en charge tous les fichiers PDF (Sans limite de taille)",
        btnBrowse: "Sélectionner un document PDF",
        btnChangeFile: "Changer de fichier",
        resultSuccess: "Conversion terminée !",
        resultSub: "Votre fichier a été converti avec succès et est prêt à être téléchargé.",
        btnDownload: "Télécharger le document (.DOCX)",
        btnPreview: "Aperçu du texte extrait",
        btnAnother: "Convertir un autre fichier",
        previewPlaceholder: "Le texte extrait apparaîtra ici...",
        adTag: "PUBLICITÉ",
        adHeaderDemo: "Espace publicitaire d'en-tête (Responsive 728x90)",
        adMiddleDemo: "Espace publicitaire au milieu (Responsive)",
        adBottomDemo: "Espace publicitaire de pied de page (Responsive)",
        howTitle: "Comment convertir un PDF en Word en 3 étapes simples",
        howSubtitle: "Le processus de conversion le plus rapide, sans installer de logiciel.",
        step1Title: "1. Téléversez le fichier PDF",
        step1Desc: "Sélectionnez votre PDF depuis votre appareil ou glissez-déposez-le dans la zone prévue.",
        step2Title: "2. Traitement automatique",
        step2Desc: "Le système analyse le PDF dans votre navigateur, extrait le texte et structure le document Word (.docx).",
        step3Title: "3. Téléchargez le document Word",
        step3Desc: "Cliquez sur télécharger pour enregistrer immédiatement votre fichier Word modifiable.",
        featTitle: "Pourquoi choisir le convertisseur PDFWordPro ?",
        featSubtitle: "La solution idéale alliant rapidité, confidentialité maximale et simplicité.",
        feat1Title: "Confidentialité totale",
        feat1Desc: "Vos fichiers ne sont jamais transférés sur un serveur tiers. Tout est exécuté localement dans votre navigateur.",
        feat2Title: "Vitesse ultra-rapide",
        feat2Desc: "Sans téléversement lourd ni files d'attente serveur, les conversions se font en quelques secondes.",
        feat3Title: "Gratuit & Illimité",
        feat3Desc: "Aucune limite quotidienne, aucune inscription, aucune carte bancaire requise.",
        feat4Title: "Format DOCX modifiable",
        feat4Desc: "Les fichiers générés sont compatibles avec Microsoft Word, Google Docs, LibreOffice et WPS Office.",
        feat5Title: "Multiplateforme",
        feat5Desc: "Fonctionne sur Windows, macOS, Linux, Android, iOS et Chromebook depuis n'importe quel navigateur.",
        feat6Title: "Suite PDF complète",
        feat6Desc: "Intègre la conversion Word, texte, la fusion, le découpage et la création de PDF à partir d'images.",
        artTitle: "Guide complet : Comment convertir un PDF en Word sans altérer la mise en page",
        artP1: "Le format PDF est idéal pour préserver la présentation d'un document. En revanche, pour éditer le contenu ou corriger des données, modifier un PDF exige souvent des outils payants coûteux.",
        artP2: "Avec PDFWordPro, convertissez vos PDF en Word (.docx) gratuitement directement dans votre navigateur, sans téléchargement d'application ni compte.",
        artH2Client: "Avantages du traitement côté client",
        artPClient: "Les services classiques exigent de téléverser vos documents vers des serveurs distants. Notre moteur s'exécute à 100% dans la mémoire de votre navigateur, garantissant une confidentialité absolue.",
        artH2Apps: "Applications compatibles avec les fichiers (.DOCX) convertis",
        artApp1: "Microsoft Word (de 2007 à Microsoft 365)",
        artApp2: "Google Docs (importez directement sur Google Drive et modifiez)",
        artApp3: "WPS Office (sur ordinateur, Android et iPhone/iPad)",
        artApp4: "LibreOffice & OpenOffice Writer sur Linux, Mac et Windows",
        faqTitle: "Foire Aux Questions (FAQ)",
        faqSubtitle: "Réponses aux questions les plus fréquentes sur notre service de conversion.",
        faqQ1: "Ce service de conversion est-il réellement gratuit ?",
        faqA1: "Oui, il est 100% gratuit et sans limite. Aucun frais caché, aucune inscription requise.",
        faqQ2: "Comment la sécurité et la confidentialité de mes documents sont-elles garanties ?",
        faqA2: "Nous utilisons le traitement côté client. Vos documents ne sont jamais envoyés sur internet : tout s'exécute dans la mémoire locale de votre navigateur.",
        faqQ3: "Est-il possible de convertir des PDF scannés en Word ?",
        faqA3: "Ce convertisseur extrait le texte vectoriel natif. Les scans photographiques bruts nécessitent un module OCR. Les PDF numériques standard se convertissent parfaitement.",
        faqQ4: "Puis-je l'utiliser sur smartphone (Android / iPhone) ?",
        faqA4: "Absolument ! Le site est entièrement responsive et fonctionne parfaitement sur les navigateurs mobiles Chrome, Safari, Firefox et Edge.",
        footerTagline: "Outils client-side rapides, gratuits et sécurisés pour la conversion et gestion de vos PDF.",
        footerColFeatures: "Fonctionnalités",
        footerColNav: "Navigation",
        footerCopy: "Conçu pour de hautes performances sur GitHub Pages. Libre d'utilisation.",
        tools: {
            pdf2word: {
                title: "Convertisseur PDF en Word (.docx)",
                desc: "Extrayez le texte, les paragraphes et la structure en un document Microsoft Word (.docx) éditable.",
                btnText: "Convertir en Word maintenant",
                downloadLabel: "Télécharger Document (.DOCX)"
            },
            pdf2txt: {
                title: "Convertisseur PDF en Texte (.txt)",
                desc: "Extrayez rapidement le texte brut de vos PDF pour vos notes, analyses ou résumés.",
                btnText: "Extraire le texte maintenant",
                downloadLabel: "Télécharger Texte (.TXT)"
            },
            merge: {
                title: "Fusionner des documents PDF",
                desc: "Rassemblez 2 fichiers PDF ou plus en un seul document organisé selon l'ordre choisi.",
                btnText: "Fusionner les fichiers PDF",
                downloadLabel: "Télécharger le PDF fusionné"
            },
            split: {
                title: "Diviser les pages d'un PDF",
                desc: "Extrayez des pages spécifiques ou une plage de pages dans un nouveau fichier PDF.",
                btnText: "Diviser les pages maintenant",
                downloadLabel: "Télécharger le PDF extrait"
            },
            img2pdf: {
                title: "Convertisseur Image en PDF",
                desc: "Transformez instantanément vos photos JPG ou PNG en un document PDF de haute qualité.",
                btnText: "Créer le PDF à partir d'images",
                downloadLabel: "Télécharger le PDF"
            }
        },
        analyzingFile: "Analyse du fichier...",
        pdfReady: "Document PDF prêt",
        pagesLabel: "Pages",
        filesSelected: "Fichiers sélectionnés",
        readyToMerge: "Prêt à fusionner",
        imageFile: "Fichier image",
        validDocNotice: "Format de document valide. Les fichiers sont traités localement sans quitter votre navigateur.",
        splitRangeLabel: "Plage de pages à extraire :",
        splitRangePlaceholder: "Exemple: 1-3, 5 (Laisser vide pour page 1)",
        splitRangeHelp: "Format : numéros séparés par des virgules ou tirets (ex: 1, 3, 5-7).",
        mergeOrderLabel: "Ordre des fichiers à fusionner :",
        sizeLabel: "Taille :",
        toastSelectFile: "Veuillez d'abord sélectionner un fichier !",
        toastSelectMin2: "Veuillez sélectionner au moins 2 fichiers PDF à fusionner !",
        toastInvalidRange: "La plage de pages saisie est invalide !",
        toastDocxLibError: "La bibliothèque docx n'a pas fini de charger. Vérifiez votre connexion.",
        toastSuccess: "Converti avec succès ! Cliquez sur télécharger.",
        toastError: "Une erreur est survenue pendant le traitement : "
    },

    id: {
        metaTitle: "Convert PDF ke Word Online Gratis – Ubah PDF ke DOCX Cepat & Aman",
        metaDesc: "Layanan gratis convert PDF ke Word (.docx) online tanpa batasan. Proses super cepat, 100% aman langsung di browser tanpa upload server.",
        navTools: "Semua Tools",
        navGuide: "Panduan",
        navSecurity: "Keamanan",
        navFaq: "FAQ",
        badgeText: "100% Privasi Terjamin: File Diproses di Browser Tanpa Upload ke Server",
        heroTitle: "Convert PDF ke Word Online Gratis",
        heroSubtitle: "Ubah dokumen PDF menjadi file Microsoft Word (.docx) yang dapat diedit secara cepat, rapi, dan mudah tanpa batasan kuota.",
        tabPdf2Word: "PDF ke Word (.docx)",
        tabPdf2Txt: "PDF ke Teks (.txt)",
        tabMerge: "Gabung PDF",
        tabSplit: "Pisah PDF",
        tabImg2Pdf: "Gambar ke PDF",
        dropzonePrompt: "Pilih atau Seret File PDF ke Sini",
        dropzoneSub: "Mendukung semua file dokumen PDF (Tanpa batasan ukuran)",
        btnBrowse: "Pilih Dokumen PDF",
        btnChangeFile: "Ganti File",
        resultSuccess: "Konversi Selesai!",
        resultSub: "File Anda telah berhasil dikonversi dan siap diunduh.",
        btnDownload: "Download Dokumen (.DOCX)",
        btnPreview: "Pratinjau Hasil Teks",
        btnAnother: "Konversi File Lain",
        previewPlaceholder: "Hasil ekstraksi teks akan muncul di sini...",
        adTag: "IKLAN",
        adHeaderDemo: "Ruang Iklan Banner Atas (Header Leaderboard 728x90)",
        adMiddleDemo: "Ruang Iklan Banner Tengah (Responsive Display)",
        adBottomDemo: "Ruang Iklan Banner Bawah (Responsive Display)",
        howTitle: "Cara Mengubah PDF ke Word Hanya dalam 3 Langkah",
        howSubtitle: "Proses konversi dokumen tercepat tanpa perlu install software tambahan.",
        step1Title: "1. Unggah File PDF",
        step1Desc: "Pilih dokumen PDF dari komputer atau ponsel pintar Anda, atau cukup seret file ke area upload.",
        step2Title: "2. Proses Otomatis",
        step2Desc: "Sistem memproses halaman PDF secara instan di browser Anda, mengekstrak teks dan menyusun struktur Word (.docx).",
        step3Title: "3. Download Hasil Word",
        step3Desc: "Klik tombol download dan dokumen Word baru Anda langsung tersimpan siap untuk diedit kapan saja.",
        featTitle: "Kenapa Memilih PDFWordPro Converter?",
        featSubtitle: "Solusi konversi dokumen terbaik dengan fokus pada kecepatan, keamanan, dan kemudahan.",
        feat1Title: "Privasi 100% Terjaga",
        feat1Desc: "File Anda tidak pernah dikirim ke internet atau disimpan di server mana pun. Seluruh operasi berjalan di browser Anda.",
        feat2Title: "Kecepatan Super Kilat",
        feat2Desc: "Karena tidak memerlukan proses upload dan download berulang ke server cloud, konversi selesai seketika.",
        feat3Title: "Tanpa Batas & Gratis Selamanya",
        feat3Desc: "Tidak ada batasan harian, tidak perlu registrasi, tidak perlu kartu kredit. Gunakan sebanyak yang Anda butuhkan.",
        feat4Title: "Format DOCX Siap Edit",
        feat4Desc: "Hasil konversi kompatibel penuh dengan Microsoft Word, Google Docs, LibreOffice, dan WPS Office.",
        feat5Title: "Mendukung Semua Perangkat",
        feat5Desc: "Bekerja mulus di berbagai sistem operasi: Windows, macOS, Linux, Android, iOS, maupun Chromebook.",
        feat6Title: "Suite PDF Lengkap",
        feat6Desc: "Selain PDF ke Word, tersedia alat bantu gabung PDF, pemisah halaman, hingga gambar ke PDF.",
        artTitle: "Panduan Lengkap: Cara Mengubah File PDF Menjadi Word Tanpa Merusak Format",
        artP1: "Format Portable Document Format (PDF) sangat ideal untuk berbagi dokumen. Namun saat perlu mengedit teks, mengoreksi data, atau memperbarui informasi, mengedit PDF secara langsung memerlukan software berbayar.",
        artP2: "Dengan PDFWordPro, Anda dapat dengan mudah melakukan convert PDF to Word secara gratis langsung dari browser tanpa aplikasi tambahan atau akun.",
        artH2Client: "Kelebihan Menggunakan Konverter Client-Side",
        artPClient: "Sebagian besar layanan online mewajibkan upload ke server pihak ketiga. Platform kami memanfaatkan teknologi modern yang berjalan 100% di memori browser Anda tanpa pernah diunggah ke server.",
        artH2Apps: "Aplikasi yang Mendukung File Hasil Konversi (.DOCX)",
        artApp1: "Microsoft Word (versi 2007 hingga Microsoft 365 terbaru)",
        artApp2: "Google Docs (bebas diunggah ke Google Drive dan langsung diedit)",
        artApp3: "WPS Office (di PC maupun smartphone Android/iOS)",
        artApp4: "LibreOffice / OpenOffice Writer di Linux, macOS, dan Windows",
        faqTitle: "Pertanyaan yang Sering Diajukan (FAQ)",
        faqSubtitle: "Jawaban atas pertanyaan umum seputar layanan convert PDF ke Word kami.",
        faqQ1: "Apakah layanan konversi ini benar-benar gratis tanpa batas?",
        faqA1: "Ya, layanan ini 100% gratis selamanya. Tidak ada batasan jumlah konversi dokumen per hari, dan tanpa registrasi atau kartu kredit.",
        faqQ2: "Bagaimana privasi dan keamanan dokumen saya dijaga?",
        faqA2: "Kami menerapkan prinsip Client-Side Processing. Dokumen Anda tidak pernah diunggah ke server mana pun melalui internet. Seluruh proses terjadi lokal di browser Anda.",
        faqQ3: "Apakah bisa convert PDF hasil scan ke Word?",
        faqA3: "Konverter ini mengekstrak teks berbasis vektor dan font standar. Untuk hasil foto scan murni (gambar bitmap), diperlukan modul OCR. Dokumen digital standar akan sangat rapi.",
        faqQ4: "Apakah bisa digunakan di smartphone (Android / iPhone)?",
        faqA4: "Tentu saja! Website ini responsif dan dapat diakses dengan lancar melalui browser Chrome, Safari, Firefox, atau Edge di ponsel Anda.",
        footerTagline: "Solusi Cepat, Gratis & Aman untuk Konversi dan Pengelolaan Dokumen PDF Anda.",
        footerColFeatures: "Fitur Utama",
        footerColNav: "Navigasi",
        footerCopy: "Dibuat dengan performa tinggi untuk GitHub Pages. Bebas digunakan.",
        tools: {
            pdf2word: {
                title: "Konverter PDF ke Word (.docx)",
                desc: "Ekstrak teks, paragraf, dan tata letak dokumen PDF menjadi file Word (.docx) resmi yang siap diedit.",
                btnText: "Konversi ke Word Sekarang",
                downloadLabel: "Download Dokumen (.DOCX)"
            },
            pdf2txt: {
                title: "Konverter PDF ke Teks (.txt)",
                desc: "Ekstrak teks murni dari dokumen PDF secara cepat untuk kebutuhan analisis, catatan, atau artikel.",
                btnText: "Ekstrak Teks Sekarang",
                downloadLabel: "Download Teks (.TXT)"
            },
            merge: {
                title: "Gabung Banyak PDF (Merge)",
                desc: "Satukan 2 atau lebih file PDF menjadi 1 file PDF utuh dengan urutan yang rapi.",
                btnText: "Gabungkan File PDF",
                downloadLabel: "Download PDF Gabungan"
            },
            split: {
                title: "Pisah Halaman PDF (Split)",
                desc: "Ambil halaman tertentu atau rentang halaman dari dokumen PDF Anda menjadi file baru.",
                btnText: "Pisahkan Halaman Sekarang",
                downloadLabel: "Download PDF Hasil Pisah"
            },
            img2pdf: {
                title: "Konverter Gambar ke PDF",
                desc: "Ubah foto JPG atau PNG menjadi dokumen PDF berkualitas tinggi secara instan.",
                btnText: "Buat File PDF dari Gambar",
                downloadLabel: "Download PDF"
            }
        },
        analyzingFile: "Menganalisis file...",
        pdfReady: "Dokumen PDF Siap",
        pagesLabel: "Halaman",
        filesSelected: "File Dipilih",
        readyToMerge: "Siap Digabungkan",
        imageFile: "File Gambar",
        validDocNotice: "Format dokumen valid. File akan diproses lokal tanpa meninggalkan browser Anda.",
        splitRangeLabel: "Rentang Halaman yang Ingin Diambil:",
        splitRangePlaceholder: "Contoh: 1-3, 5 (Kosongkan untuk ambil halaman 1)",
        splitRangeHelp: "Format: nomor halaman dipisah tanda koma atau rentang strip (misal: 1, 3, 5-7).",
        mergeOrderLabel: "Urutan File yang Akan Digabung:",
        sizeLabel: "Ukuran:",
        toastSelectFile: "Silakan pilih file terlebih dahulu!",
        toastSelectMin2: "Pilih minimal 2 file PDF untuk digabungkan!",
        toastInvalidRange: "Nomor halaman yang Anda masukkan tidak valid!",
        toastDocxLibError: "Library docx belum dimuat dengan sempurna. Periksa koneksi internet Anda.",
        toastSuccess: "Berhasil dikonversi! Klik tombol download untuk menyimpan.",
        toastError: "Terjadi kesalahan saat memproses file: "
    }
};

// Global App State - Default to 'en' (English)
let currentLang = 'en';
let currentTool = 'pdf2word';
let selectedFiles = [];
let generatedDownloadUrl = null;
let lastExtractedText = '';

// DOM Elements
const body = document.body;
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIcon = document.getElementById('theme-icon');
const langMenuBtn = document.getElementById('lang-menu-btn');
const langDropdown = document.getElementById('lang-dropdown');
const currentLangText = document.getElementById('current-lang-text');

// Tools UI Elements
const toolTabs = document.querySelectorAll('.tool-tab');
const currentToolTitle = document.getElementById('tool-heading-text');
const currentToolDesc = document.getElementById('tool-desc-text');
const toolMainIcon = document.getElementById('tool-main-icon');
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const btnSelectFile = document.getElementById('btn-select-file');

const operationsPanel = document.getElementById('operations-panel');
const displayFileName = document.getElementById('display-file-name');
const displayFileSize = document.getElementById('display-file-size');
const displayFilePages = document.getElementById('display-file-pages');
const btnRemoveFile = document.getElementById('btn-remove-file');
const toolOptionsContainer = document.getElementById('tool-options-container');
const btnStartProcess = document.getElementById('btn-start-process');
const btnProcessLabel = document.getElementById('btn-process-label');

const processingPanel = document.getElementById('processing-panel');
const processStatusTitle = document.getElementById('process-status-title');
const processStatusDetail = document.getElementById('process-status-detail');
const progressBarFill = document.getElementById('progress-bar-fill');

const resultPanel = document.getElementById('result-panel');
const resultFileName = document.getElementById('result-file-name');
const resultFileSize = document.getElementById('result-file-size');
const btnDownloadResult = document.getElementById('btn-download-result');
const previewBox = document.getElementById('preview-box');
const previewToggleBtn = document.getElementById('preview-toggle-btn');
const previewContentArea = document.getElementById('preview-content-area');
const previewTextarea = document.getElementById('preview-textarea');
const btnConvertAnother = document.getElementById('btn-convert-another');
const toastContainer = document.getElementById('toast-container');

// Tool Static Configurations (icons, accept, multiple)
const TOOL_SPECS = {
    pdf2word: {
        accept: ".pdf",
        multiple: false,
        icon: "fa-file-word",
        hasPreview: true
    },
    pdf2txt: {
        accept: ".pdf",
        multiple: false,
        icon: "fa-file-lines",
        hasPreview: true
    },
    merge: {
        accept: ".pdf",
        multiple: true,
        icon: "fa-object-group",
        hasPreview: false
    },
    split: {
        accept: ".pdf",
        multiple: false,
        icon: "fa-scissors",
        hasPreview: false
    },
    img2pdf: {
        accept: "image/png, image/jpeg, image/jpg",
        multiple: true,
        icon: "fa-images",
        hasPreview: false
    }
};

/* ===================================================================
   Initialize & Event Listeners
   =================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Current year in footer
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Theme initialization
    const savedTheme = localStorage.getItem('pdf_theme') || 'dark';
    setTheme(savedTheme);

    // Language initialization - Default English
    const savedLang = localStorage.getItem('pdf_lang') || 'en';
    setLanguage(savedLang);

    // Setup UI interactions
    setupEventListeners();
    setupFaqAccordion();
});

function setupEventListeners() {
    // Theme toggle
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Language Menu Toggle
    langMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('hidden');
    });

    // Close language dropdown on outside click
    document.addEventListener('click', (e) => {
        if (!langMenuBtn.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.add('hidden');
        }
    });

    // Language selection from dropdown
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const langCode = btn.getAttribute('data-lang');
            setLanguage(langCode);
            langDropdown.classList.add('hidden');
        });
    });

    // Tool switcher tabs
    toolTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const toolKey = tab.getAttribute('data-tool');
            switchTool(toolKey);
        });
    });

    // Dropzone & File Input
    btnSelectFile.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
    });

    dropZone.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', handleFileSelect);

    // Drag and drop events
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.add('dragover');
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.remove('dragover');
        });
    });

    dropZone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files && files.length > 0) {
            processDroppedFiles(Array.from(files));
        }
    });

    // Remove file / Reset
    btnRemoveFile.addEventListener('click', resetToolState);
    btnConvertAnother.addEventListener('click', resetToolState);

    // Start Process Button
    btnStartProcess.addEventListener('click', executeActiveTool);

    // Preview Toggle
    previewToggleBtn.addEventListener('click', () => {
        previewContentArea.classList.toggle('hidden');
        previewToggleBtn.querySelector('.toggle-caret').classList.toggle('rotated');
    });
}

function setupFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

/* ===================================================================
   Theme & Language Functions
   =================================================================== */
function setTheme(theme) {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('pdf_theme', theme);
    if (theme === 'dark') {
        themeIcon.className = 'fa-solid fa-sun';
        themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
    } else {
        themeIcon.className = 'fa-solid fa-moon';
        themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
    }
}

function setLanguage(lang) {
    if (!i18n[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('pdf_lang', lang);
    document.documentElement.lang = lang;

    // Update Language Dropdown Button Text & Active State
    currentLangText.textContent = lang.toUpperCase();
    document.querySelectorAll('.lang-option').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const dict = i18n[lang];

    // Update document title and meta description
    if (dict.metaTitle) document.title = dict.metaTitle;
    const metaDesc = document.getElementById('meta-desc');
    if (metaDesc && dict.metaDesc) metaDesc.setAttribute('content', dict.metaDesc);

    // Update all text elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Update textarea placeholder
    if (previewTextarea && dict.previewPlaceholder) {
        previewTextarea.placeholder = dict.previewPlaceholder;
    }

    // Update tool header & active tool state
    updateToolHeader();

    // Re-render tool options if operations panel is active
    if (!operationsPanel.classList.contains('hidden')) {
        renderToolOptions();
    }
}

/* ===================================================================
   Tool Switching Logic
   =================================================================== */
window.switchTool = function(toolKey) {
    if (!TOOL_SPECS[toolKey]) return;
    currentTool = toolKey;

    toolTabs.forEach(tab => {
        if (tab.getAttribute('data-tool') === toolKey) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    updateToolHeader();
    resetToolState();
};

function updateToolHeader() {
    const dict = i18n[currentLang] || i18n.en;
    const toolInfo = dict.tools[currentTool];
    const spec = TOOL_SPECS[currentTool];

    if (toolInfo) {
        currentToolTitle.textContent = toolInfo.title;
        currentToolDesc.textContent = toolInfo.desc;
        btnProcessLabel.textContent = toolInfo.btnText;
    }

    if (toolMainIcon) {
        toolMainIcon.className = `fa-solid ${spec.icon} highlight-icon`;
    }

    fileInput.accept = spec.accept;
    fileInput.multiple = spec.multiple;
}

/* ===================================================================
   File Handling & Options Injection
   =================================================================== */
function handleFileSelect(e) {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
        processDroppedFiles(files);
    }
}

async function processDroppedFiles(files) {
    const spec = TOOL_SPECS[currentTool];
    const dict = i18n[currentLang] || i18n.en;

    if (!spec.multiple) {
        selectedFiles = [files[0]];
    } else {
        selectedFiles = files;
    }

    if (selectedFiles.length === 0) return;

    // Show operations panel, hide dropzone
    dropZone.classList.add('hidden');
    operationsPanel.classList.remove('hidden');
    processingPanel.classList.add('hidden');
    resultPanel.classList.add('hidden');

    // Update file badge display
    if (selectedFiles.length === 1) {
        const file = selectedFiles[0];
        displayFileName.textContent = file.name;
        displayFileSize.textContent = formatBytes(file.size);
        displayFilePages.textContent = dict.analyzingFile;

        // Inspect PDF page count if PDF
        if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
            try {
                const pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
                displayFilePages.textContent = `${pdf.numPages} ${dict.pagesLabel}`;
            } catch (err) {
                displayFilePages.textContent = dict.pdfReady;
            }
        } else {
            displayFilePages.textContent = dict.imageFile;
        }
    } else {
        displayFileName.textContent = `${selectedFiles.length} ${dict.filesSelected}`;
        const totalSize = selectedFiles.reduce((acc, f) => acc + f.size, 0);
        displayFileSize.textContent = formatBytes(totalSize);
        displayFilePages.textContent = dict.readyToMerge;
    }

    // Render tool-specific options
    renderToolOptions();
}

function renderToolOptions() {
    const dict = i18n[currentLang] || i18n.en;
    toolOptionsContainer.innerHTML = '';

    if (currentTool === 'split') {
        toolOptionsContainer.innerHTML = `
            <div style="text-align: left;">
                <label style="display:block; font-size:0.9rem; font-weight:600; margin-bottom:8px;">
                    <i class="fa-solid fa-list-ol"></i> ${dict.splitRangeLabel}
                </label>
                <input type="text" id="split-range-input" placeholder="${dict.splitRangePlaceholder}" 
                    style="width:100%; padding:10px 14px; background:var(--bg-surface); border:1px solid var(--border-glass); border-radius:var(--radius-sm); color:var(--text-primary); outline:none;">
                <small style="display:block; color:var(--text-muted); margin-top:6px; font-size:0.8rem;">
                    ${dict.splitRangeHelp}
                </small>
            </div>
        `;
    } else if (currentTool === 'merge') {
        const fileListHtml = selectedFiles.map((f, idx) => `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 10px; background:var(--bg-surface); border-radius:6px; margin-bottom:6px; font-size:0.88rem;">
                <span>${idx + 1}. ${f.name}</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">${formatBytes(f.size)}</span>
            </div>
        `).join('');

        toolOptionsContainer.innerHTML = `
            <div style="text-align:left;">
                <label style="display:block; font-size:0.9rem; font-weight:600; margin-bottom:8px;">
                    <i class="fa-solid fa-layer-group"></i> ${dict.mergeOrderLabel}
                </label>
                <div style="max-height:160px; overflow-y:auto;">
                    ${fileListHtml}
                </div>
            </div>
        `;
    } else {
        toolOptionsContainer.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px; font-size:0.88rem; color:var(--text-secondary); text-align:left;">
                <i class="fa-solid fa-circle-check" style="color:var(--success-color); font-size:1.1rem;"></i>
                <span>${dict.validDocNotice}</span>
            </div>
        `;
    }
}

function resetToolState() {
    selectedFiles = [];
    fileInput.value = '';
    if (generatedDownloadUrl) {
        URL.revokeObjectURL(generatedDownloadUrl);
        generatedDownloadUrl = null;
    }
    lastExtractedText = '';

    dropZone.classList.remove('hidden');
    operationsPanel.classList.add('hidden');
    processingPanel.classList.add('hidden');
    resultPanel.classList.add('hidden');
    progressBarFill.style.width = '0%';
}

/* ===================================================================
   Tool Execution Dispatcher
   =================================================================== */
async function executeActiveTool() {
    const dict = i18n[currentLang] || i18n.en;

    if (selectedFiles.length === 0) {
        showToast(dict.toastSelectFile, "warning");
        return;
    }

    // Switch to processing UI
    operationsPanel.classList.add('hidden');
    processingPanel.classList.remove('hidden');
    progressBarFill.style.width = '10%';
    processStatusTitle.textContent = dict.analyzingFile;
    processStatusDetail.textContent = "...";

    try {
        switch (currentTool) {
            case 'pdf2word':
                await runPdfToWord(selectedFiles[0]);
                break;
            case 'pdf2txt':
                await runPdfToTxt(selectedFiles[0]);
                break;
            case 'merge':
                await runMergePdfs(selectedFiles);
                break;
            case 'split':
                await runSplitPdf(selectedFiles[0]);
                break;
            case 'img2pdf':
                await runImagesToPdf(selectedFiles);
                break;
            default:
                throw new Error("Invalid tool selected");
        }
    } catch (err) {
        console.error("Conversion error:", err);
        showToast(dict.toastError + (err.message || err), "error");
        processingPanel.classList.add('hidden');
        operationsPanel.classList.remove('hidden');
    }
}

/* ===================================================================
   1. PDF to Word (.docx) Engine (Client-Side)
   =================================================================== */
async function runPdfToWord(file) {
    const dict = i18n[currentLang] || i18n.en;
    if (!window.docx) {
        throw new Error(dict.toastDocxLibError);
    }

    processStatusTitle.textContent = dict.analyzingFile;
    progressBarFill.style.width = '20%';

    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const totalPages = pdfDoc.numPages;

    const docChildren = [];
    let combinedTextPreview = '';

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        const progress = Math.round(20 + ((pageNum / totalPages) * 60));
        progressBarFill.style.width = `${progress}%`;
        processStatusTitle.textContent = `${dict.step2Title} (${pageNum}/${totalPages})...`;

        const page = await pdfDoc.getPage(pageNum);
        const textContent = await page.getTextContent();

        // Extract items and reconstruct lines
        const lines = reconstructLinesFromPdf(textContent.items);

        for (const line of lines) {
            if (!line.trim()) continue;
            combinedTextPreview += line + '\n';

            // Detect heading based on length or capital letters
            const isHeading = line.length < 60 && (line === line.toUpperCase() || line.startsWith('CHAPTER ') || line.startsWith('BAB '));

            if (isHeading) {
                docChildren.push(
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                text: line,
                                bold: true,
                                size: 28, // 14pt
                                color: "2B579A"
                            })
                        ],
                        spacing: { before: 240, after: 120 }
                    })
                );
            } else {
                docChildren.push(
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                text: line,
                                size: 22, // 11pt
                                font: "Calibri"
                            })
                        ],
                        spacing: { after: 140 }
                    })
                );
            }
        }

        // Add page break if not last page
        if (pageNum < totalPages) {
            combinedTextPreview += '\n--- [Page Break] ---\n\n';
            docChildren.push(
                new docx.Paragraph({
                    children: [new docx.PageBreak()]
                })
            );
        }
    }

    progressBarFill.style.width = '85%';
    processStatusTitle.textContent = dict.step2Title + "...";

    // Build Word Document
    const doc = new docx.Document({
        sections: [{
            properties: {
                page: {
                    margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } // 1 inch standard margin
                }
            },
            children: docChildren.length > 0 ? docChildren : [
                new docx.Paragraph({
                    children: [new docx.TextRun("Converted document from PDF.")]
                })
            ]
        }]
    });

    const docxBlob = await docx.Packer.toBlob(doc);
    progressBarFill.style.width = '100%';

    // Prepare Result UI
    const originalBaseName = file.name.replace(/\.[^/.]+$/, "");
    const outputFileName = `${originalBaseName}.docx`;
    showResultScreen(docxBlob, outputFileName, combinedTextPreview, 'fa-file-word');
}

/* ===================================================================
   2. PDF to Text (.txt) Engine
   =================================================================== */
async function runPdfToTxt(file) {
    const dict = i18n[currentLang] || i18n.en;
    processStatusTitle.textContent = dict.analyzingFile;
    progressBarFill.style.width = '30%';

    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const totalPages = pdfDoc.numPages;

    let fullText = '';

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        const progress = Math.round(30 + ((pageNum / totalPages) * 60));
        progressBarFill.style.width = `${progress}%`;
        processStatusTitle.textContent = `${dict.step2Title} (${pageNum}/${totalPages})...`;

        const page = await pdfDoc.getPage(pageNum);
        const textContent = await page.getTextContent();
        const lines = reconstructLinesFromPdf(textContent.items);

        fullText += `=== Page ${pageNum} ===\n\n`;
        fullText += lines.join('\n') + '\n\n';
    }

    progressBarFill.style.width = '100%';
    const txtBlob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    const originalBaseName = file.name.replace(/\.[^/.]+$/, "");
    showResultScreen(txtBlob, `${originalBaseName}.txt`, fullText, 'fa-file-lines');
}

/* ===================================================================
   3. Merge PDFs Engine (pdf-lib)
   =================================================================== */
async function runMergePdfs(files) {
    const dict = i18n[currentLang] || i18n.en;
    if (files.length < 2) {
        throw new Error(dict.toastSelectMin2);
    }

    processStatusTitle.textContent = dict.step2Title + "...";
    progressBarFill.style.width = '20%';

    const mergedPdf = await PDFLib.PDFDocument.create();

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const progress = Math.round(20 + ((i / files.length) * 70));
        progressBarFill.style.width = `${progress}%`;
        processStatusTitle.textContent = `(${i + 1}/${files.length}) ${file.name}`;

        const fileBuffer = await file.arrayBuffer();
        const pdf = await PDFLib.PDFDocument.load(fileBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    progressBarFill.style.width = '95%';
    const mergedPdfBytes = await mergedPdf.save();
    const mergedBlob = new Blob([mergedPdfBytes], { type: 'application/pdf' });

    progressBarFill.style.width = '100%';
    showResultScreen(mergedBlob, `Merged_Document_${Date.now()}.pdf`, "", 'fa-object-group');
}

/* ===================================================================
   4. Split PDF Engine (pdf-lib)
   =================================================================== */
async function runSplitPdf(file) {
    const dict = i18n[currentLang] || i18n.en;
    processStatusTitle.textContent = dict.analyzingFile;
    progressBarFill.style.width = '30%';

    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
    const totalPages = pdfDoc.getPageCount();

    const rangeInput = document.getElementById('split-range-input');
    const rangeText = (rangeInput ? rangeInput.value.trim() : '') || '1';

    // Parse target page numbers
    const targetPages = parsePageRange(rangeText, totalPages);
    if (targetPages.length === 0) {
        throw new Error(dict.toastInvalidRange);
    }

    progressBarFill.style.width = '60%';
    processStatusTitle.textContent = `${dict.step2Title} (${targetPages.length} ${dict.pagesLabel})...`;

    const newPdf = await PDFLib.PDFDocument.create();
    const zeroBasedIndices = targetPages.map(p => p - 1);
    const copiedPages = await newPdf.copyPages(pdfDoc, zeroBasedIndices);
    copiedPages.forEach(p => newPdf.addPage(p));

    progressBarFill.style.width = '90%';
    const splitBytes = await newPdf.save();
    const splitBlob = new Blob([splitBytes], { type: 'application/pdf' });

    const baseName = file.name.replace(/\.[^/.]+$/, "");
    progressBarFill.style.width = '100%';
    showResultScreen(splitBlob, `${baseName}_pages_${rangeText.replace(/[^0-9-]/g, '_')}.pdf`, "", 'fa-scissors');
}

/* ===================================================================
   5. Images to PDF Engine (pdf-lib)
   =================================================================== */
async function runImagesToPdf(files) {
    const dict = i18n[currentLang] || i18n.en;
    processStatusTitle.textContent = dict.step2Title + "...";
    progressBarFill.style.width = '20%';

    const pdfDoc = await PDFLib.PDFDocument.create();

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const progress = Math.round(20 + ((i / files.length) * 70));
        progressBarFill.style.width = `${progress}%`;
        processStatusTitle.textContent = `(${i + 1}/${files.length}) ${file.name}`;

        const imageBytes = await file.arrayBuffer();
        let image;
        if (file.type === 'image/jpeg' || file.name.endsWith('.jpg') || file.name.endsWith('.jpeg')) {
            image = await pdfDoc.embedJpg(imageBytes);
        } else {
            image = await pdfDoc.embedPng(imageBytes);
        }

        const page = pdfDoc.addPage([image.width, image.height]);
        page.drawImage(image, {
            x: 0,
            y: 0,
            width: image.width,
            height: image.height,
        });
    }

    progressBarFill.style.width = '95%';
    const pdfBytes = await pdfDoc.save();
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

    progressBarFill.style.width = '100%';
    showResultScreen(pdfBlob, `Images_to_PDF_${Date.now()}.pdf`, "", 'fa-images');
}

/* ===================================================================
   Result Display & Helpers
   =================================================================== */
function showResultScreen(blob, fileName, previewText, iconClass) {
    const dict = i18n[currentLang] || i18n.en;
    processingPanel.classList.add('hidden');
    resultPanel.classList.remove('hidden');

    if (generatedDownloadUrl) {
        URL.revokeObjectURL(generatedDownloadUrl);
    }
    generatedDownloadUrl = URL.createObjectURL(blob);

    resultFileName.textContent = fileName;
    resultFileSize.textContent = `${dict.sizeLabel} ${formatBytes(blob.size)}`;

    const resultIcon = document.getElementById('result-file-icon');
    if (resultIcon) {
        resultIcon.className = `fa-solid ${iconClass} download-icon`;
    }

    btnDownloadResult.href = generatedDownloadUrl;
    btnDownloadResult.download = fileName;

    // Setup preview
    if (previewText && TOOL_SPECS[currentTool].hasPreview) {
        previewBox.classList.remove('hidden');
        previewTextarea.value = previewText;
    } else {
        previewBox.classList.add('hidden');
    }

    showToast(dict.toastSuccess, "success");
}

function reconstructLinesFromPdf(items) {
    if (!items || items.length === 0) return [];

    const linesMap = new Map();
    const tolerance = 4; // pt tolerance for same line

    for (const item of items) {
        const text = item.str;
        if (!text && text !== ' ') continue;

        const y = Math.round(item.transform[5]);
        const x = item.transform[4];

        let matchedY = null;
        for (const existingY of linesMap.keys()) {
            if (Math.abs(existingY - y) <= tolerance) {
                matchedY = existingY;
                break;
            }
        }

        if (matchedY === null) {
            matchedY = y;
            linesMap.set(matchedY, []);
        }

        linesMap.get(matchedY).push({ text, x });
    }

    const sortedY = Array.from(linesMap.keys()).sort((a, b) => b - a);
    const resultLines = [];

    for (const y of sortedY) {
        const lineItems = linesMap.get(y);
        lineItems.sort((a, b) => a.x - b.x);
        const lineText = lineItems.map(item => item.text).join(' ').trim();
        if (lineText) {
            resultLines.push(lineText);
        }
    }

    return resultLines;
}

function parsePageRange(rangeStr, maxPages) {
    const pages = new Set();
    const parts = rangeStr.split(',');

    for (const part of parts) {
        const clean = part.trim();
        if (clean.includes('-')) {
            const [start, end] = clean.split('-').map(n => parseInt(n.trim(), 10));
            if (!isNaN(start) && !isNaN(end)) {
                const s = Math.max(1, Math.min(start, end));
                const e = Math.min(maxPages, Math.max(start, end));
                for (let i = s; i <= e; i++) pages.add(i);
            }
        } else {
            const single = parseInt(clean, 10);
            if (!isNaN(single) && single >= 1 && single <= maxPages) {
                pages.add(single);
            }
        }
    }

    return Array.from(pages).sort((a, b) => a - b);
}

function formatBytes(bytes, decimals = 1) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const iconMap = {
        success: 'fa-circle-check',
        error: 'fa-circle-exclamation',
        warning: 'fa-triangle-exclamation'
    };

    toast.innerHTML = `
        <i class="fa-solid ${iconMap[type] || 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;

    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}
