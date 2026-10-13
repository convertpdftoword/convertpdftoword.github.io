import fs from 'fs';
import path from 'path';

const LANGUAGES = {
    en: {
        code: 'en',
        name: 'English',
        flag: '🇬🇧',
        metaTitle: "Free Online PDF to Word Converter – Convert PDF to DOCX Fast & Secure",
        metaDesc: "Free client-side PDF to Word (.docx) converter without limitations. Super fast, 100% private in browser with zero server uploads. High quality editable DOCX output.",
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
        toolHeadingText: "PDF to Word Converter (.docx)",
        toolDescText: "Extract text, paragraphs, and document structure into an editable Microsoft Word (.docx) file.",
        dropzonePrompt: "Select or Drag & Drop PDF File Here",
        dropzoneSub: "Supports all PDF document files (No file size limits)",
        btnBrowse: "Choose PDF Document",
        btnChangeFile: "Change File",
        btnProcessLabel: "Convert to Word Now",
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
        footerCopy: "Engineered for high performance on GitHub Pages. Free to use."
    },

    ja: {
        code: 'ja',
        name: '日本語',
        flag: '🇯🇵',
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
        toolHeadingText: "PDF → Word 変換 (.docx)",
        toolDescText: "PDFからテキスト、段落、レイアウトを抽出して編集可能なWordファイルを作成します。",
        dropzonePrompt: "ここにPDFファイルを選択またはドラッグ＆ドロップ",
        dropzoneSub: "すべてのPDFファイルに対応（サイズ制限なし）",
        btnBrowse: "PDFドキュメントを選択",
        btnChangeFile: "ファイルを変更",
        btnProcessLabel: "Wordに変換する",
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
        footerCopy: "GitHub Pages向けに最適化された高性能ツール。無料提供。"
    },

    ru: {
        code: 'ru',
        name: 'Русский',
        flag: '🇷🇺',
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
        toolHeadingText: "Конвертер PDF в Word (.docx)",
        toolDescText: "Извлечение текста, абзацев и форматирования в редактируемый файл Microsoft Word (.docx).",
        dropzonePrompt: "Выберите или перетащите PDF-файл сюда",
        dropzoneSub: "Поддерживаются любые PDF-файлы (без ограничения размера)",
        btnBrowse: "Выбрать PDF-документ",
        btnChangeFile: "Сменить файл",
        btnProcessLabel: "Конвертировать в Word",
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
        footerCopy: "Высокая производительность для GitHub Pages. Доступно бесплатно."
    },

    fr: {
        code: 'fr',
        name: 'Français',
        flag: '🇫🇷',
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
        toolHeadingText: "Convertisseur PDF en Word (.docx)",
        toolDescText: "Extrayez le texte, les paragraphes et la structure en un document Microsoft Word (.docx) éditable.",
        dropzonePrompt: "Sélectionnez ou glissez-déposez le fichier PDF ici",
        dropzoneSub: "Prend en charge tous les fichiers PDF (Sans limite de taille)",
        btnBrowse: "Sélectionner un document PDF",
        btnChangeFile: "Changer de fichier",
        btnProcessLabel: "Convertir en Word maintenant",
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
        footerCopy: "Conçu pour de hautes performances sur GitHub Pages. Libre d'utilisation."
    },

    id: {
        code: 'id',
        name: 'Indonesia',
        flag: '🇮🇩',
        metaTitle: "Convert PDF ke Word Online Gratis – Ubah PDF ke DOCX Cepat & Aman",
        metaDesc: "Layanan gratis convert PDF ke Word (.docx) online tanpa batasan. Proses super cepat, 100% aman langsung di browser tanpa upload server. Hasil rapi dan dapat diedit.",
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
        toolHeadingText: "Konverter PDF ke Word (.docx)",
        toolDescText: "Ekstrak teks, paragraf, dan tata letak dokumen PDF Anda menjadi file Word (.docx) resmi yang siap diedit.",
        dropzonePrompt: "Pilih atau Seret File PDF ke Sini",
        dropzoneSub: "Mendukung semua file dokumen PDF (Tanpa batasan ukuran)",
        btnBrowse: "Pilih Dokumen PDF",
        btnChangeFile: "Ganti File",
        btnProcessLabel: "Konversi ke Word Sekarang",
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
        feat1Desc: "File Anda tidak pernah dikirim ke internet atau disimpan di server mana pun. Seluruh operasi komputasi berjalan di browser Anda.",
        feat2Title: "Kecepatan Super Kilat",
        feat2Desc: "Karena tidak memerlukan proses upload dan download berulang ke server cloud, konversi selesai seketika.",
        feat3Title: "Tanpa Batas & Gratis Selamanya",
        feat3Desc: "Tidak ada batasan harian, tidak perlu registrasi, tidak perlu berlangganan kartu kredit. Gunakan sebanyak yang Anda butuhkan.",
        feat4Title: "Format DOCX Siap Edit",
        feat4Desc: "Hasil konversi kompatibel penuh dengan Microsoft Office Word, Google Docs, LibreOffice Writer, dan WPS Office.",
        feat5Title: "Mendukung Semua Perangkat",
        feat5Desc: "Bekerja mulus di berbagai sistem operasi: Windows, macOS, Linux, Android, iOS, maupun Chromebook.",
        feat6Title: "Suite PDF Lengkap",
        feat6Desc: "Selain PDF ke Word, tersedia alat bantu gabung PDF, pemisah halaman PDF, hingga konversi gambar ke PDF.",
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
        footerCopy: "Dibuat dengan performa tinggi untuk GitHub Pages. Bebas digunakan."
    }
};

function renderPage(langCode, isSubdir = true) {
    const d = LANGUAGES[langCode];
    const assetPrefix = isSubdir ? '../' : './';
    const canonicalUrl = `https://convertpdftoword.github.io/${langCode}/`;

    // Dropdown links
    const langLinksHtml = Object.keys(LANGUAGES).map(k => {
        const item = LANGUAGES[k];
        const activeClass = k === langCode ? 'active' : '';
        const href = isSubdir ? `../${k}/` : `./${k}/`;
        return `<a href="${href}" class="lang-option ${activeClass}" data-lang="${k}"><span>${item.flag}</span> ${item.name}</a>`;
    }).join('\n                        ');

    return `<!DOCTYPE html>
<html lang="${langCode}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${d.metaTitle}</title>
    
    <!-- SEO Meta Tags -->
    <meta name="description" id="meta-desc" content="${d.metaDesc}">
    <meta name="keywords" content="convert pdf to word, pdf to word, free pdf to word converter, convert pdf to docx, pdf to docx online, merge pdf, split pdf, images to pdf, private pdf converter">
    <meta name="author" content="PDFWordPro">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonicalUrl}">

    <!-- Multilingual Hreflang Tags (Crucial for Google Ranking by Country) -->
    <link rel="alternate" hreflang="x-default" href="https://convertpdftoword.github.io/en/">
    <link rel="alternate" hreflang="en" href="https://convertpdftoword.github.io/en/">
    <link rel="alternate" hreflang="ja" href="https://convertpdftoword.github.io/ja/">
    <link rel="alternate" hreflang="ru" href="https://convertpdftoword.github.io/ru/">
    <link rel="alternate" hreflang="fr" href="https://convertpdftoword.github.io/fr/">
    <link rel="alternate" hreflang="id" href="https://convertpdftoword.github.io/id/">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" id="og-title" content="${d.metaTitle}">
    <meta property="og:description" id="og-desc" content="${d.metaDesc}">
    <meta property="og:image" content="https://convertpdftoword.github.io/og-image.png">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" id="tw-title" content="${d.metaTitle}">
    <meta name="twitter:description" id="tw-desc" content="${d.metaDesc}">
    <meta name="twitter:image" content="https://convertpdftoword.github.io/og-image.png">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet">

    <!-- FontAwesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="${assetPrefix}styles.css">

    <!-- Structured Data (Schema.org) for Search Engines -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebApplication",
          "@id": "${canonicalUrl}#app",
          "name": "PDFWordPro - Online PDF to Word Converter",
          "url": "${canonicalUrl}",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "All",
          "browserRequirements": "Requires JavaScript. Requires HTML5.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "${d.metaDesc}"
        },
        {
          "@type": "HowTo",
          "name": "${d.howTitle}",
          "description": "${d.howSubtitle}",
          "step": [
            {
              "@type": "HowToStep",
              "name": "${d.step1Title}",
              "text": "${d.step1Desc}",
              "position": 1
            },
            {
              "@type": "HowToStep",
              "name": "${d.step2Title}",
              "text": "${d.step2Desc}",
              "position": 2
            },
            {
              "@type": "HowToStep",
              "name": "${d.step3Title}",
              "text": "${d.step3Desc}",
              "position": 3
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "${d.faqQ1}",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "${d.faqA1}"
              }
            },
            {
              "@type": "Question",
              "name": "${d.faqQ2}",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "${d.faqA2}"
              }
            },
            {
              "@type": "Question",
              "name": "${d.faqQ3}",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "${d.faqA3}"
              }
            },
            {
              "@type": "Question",
              "name": "${d.faqQ4}",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "${d.faqA4}"
              }
            }
          ]
        }
      ]
    }
    </script>
</head>
<body data-theme="dark">
    <!-- Navbar -->
    <header class="site-header">
        <div class="container header-container">
            <a href="${isSubdir ? '../' + langCode + '/' : './'}" class="brand-logo" id="brand-logo">
                <div class="logo-icon">
                    <i class="fa-solid fa-file-pdf"></i>
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    <i class="fa-solid fa-file-word"></i>
                </div>
                <div class="logo-text">
                    <span class="logo-title">PDF<span class="highlight">Word</span>Pro</span>
                    <span class="logo-sub">Client-Side Tools</span>
                </div>
            </a>

            <nav class="nav-links">
                <a href="#tool-section" class="nav-link active"><i class="fa-solid fa-wrench"></i> <span data-i18n="navTools">${d.navTools}</span></a>
                <a href="${assetPrefix}all-tools.html" class="nav-link"><i class="fa-solid fa-table-cells-large"></i> <span>All Tools (33)</span></a>
                <a href="${assetPrefix}articles/" class="nav-link"><i class="fa-solid fa-book-open"></i> <span>Guides (25)</span></a>
                <a href="#how-it-works" class="nav-link"><i class="fa-solid fa-circle-info"></i> <span data-i18n="navGuide">${d.navGuide}</span></a>
                <a href="#features" class="nav-link"><i class="fa-solid fa-shield-halved"></i> <span data-i18n="navSecurity">${d.navSecurity}</span></a>
                <a href="#faq" class="nav-link"><i class="fa-solid fa-circle-question"></i> <span data-i18n="navFaq">${d.navFaq}</span></a>
            </nav>

            <div class="header-actions">
                <!-- 5-Language Dropdown Selector (Direct Link URLs) -->
                <div class="lang-selector-wrap">
                    <button id="lang-menu-btn" class="icon-btn lang-dropdown-btn" title="Switch Language" aria-label="Select Language">
                        <i class="fa-solid fa-globe"></i>
                        <span id="current-lang-text">${langCode.toUpperCase()}</span>
                        <i class="fa-solid fa-chevron-down" style="font-size: 0.65rem; margin-left: 2px;"></i>
                    </button>
                    <div class="lang-dropdown-menu hidden" id="lang-dropdown">
                        ${langLinksHtml}
                    </div>
                </div>

                <!-- Theme Toggle Button -->
                <button id="theme-toggle-btn" class="icon-btn" title="Toggle Dark/Light Mode" aria-label="Toggle Theme">
                    <i class="fa-solid fa-sun" id="theme-icon"></i>
                </button>
            </div>
        </div>
    </header>

    <!-- Top Ad Banner Space -->
    <div class="container ad-wrapper ad-header-slot">
        <div class="ad-placeholder" id="ad-slot-header">
            <span class="ad-tag" data-i18n="adTag">${d.adTag}</span>
            <div class="ad-demo-box">
                <i class="fa-solid fa-rectangle-ad"></i>
                <span data-i18n="adHeaderDemo">${d.adHeaderDemo}</span>
            </div>
        </div>
    </div>

    <!-- Main Hero & Tool Section -->
    <main class="main-content">
        <section class="hero-section">
            <div class="container hero-container text-center">
                <div class="trust-badge">
                    <i class="fa-solid fa-lock"></i>
                    <span data-i18n="badgeText">${d.badgeText}</span>
                </div>
                <h1 class="hero-title" id="main-h1" data-i18n="heroTitle">
                    ${d.heroTitle}
                </h1>
                <p class="hero-subtitle" data-i18n="heroSubtitle">
                    ${d.heroSubtitle}
                </p>
            </div>
        </section>

        <!-- Tools Suite Container -->
        <section class="tool-section" id="tool-section">
            <div class="container tool-container">
                <!-- Tool Switcher Tabs -->
                <div class="tools-tab-bar" role="tablist">
                    <button class="tool-tab active" data-tool="pdf2word" role="tab" id="tab-pdf2word">
                        <i class="fa-solid fa-file-word"></i>
                        <span data-i18n="tabPdf2Word">${d.tabPdf2Word}</span>
                    </button>
                    <button class="tool-tab" data-tool="pdf2txt" role="tab" id="tab-pdf2txt">
                        <i class="fa-solid fa-file-lines"></i>
                        <span data-i18n="tabPdf2Txt">${d.tabPdf2Txt}</span>
                    </button>
                    <button class="tool-tab" data-tool="merge" role="tab" id="tab-merge">
                        <i class="fa-solid fa-object-group"></i>
                        <span data-i18n="tabMerge">${d.tabMerge}</span>
                    </button>
                    <button class="tool-tab" data-tool="split" role="tab" id="tab-split">
                        <i class="fa-solid fa-scissors"></i>
                        <span data-i18n="tabSplit">${d.tabSplit}</span>
                    </button>
                    <button class="tool-tab" data-tool="img2pdf" role="tab" id="tab-img2pdf">
                        <i class="fa-solid fa-images"></i>
                        <span data-i18n="tabImg2Pdf">${d.tabImg2Pdf}</span>
                    </button>
                </div>

                <!-- Main Tool Box (Card) -->
                <div class="tool-card glass-panel" id="main-tool-card">
                    <!-- Dynamic Tool Header -->
                    <div class="tool-header">
                        <h2 class="tool-title" id="current-tool-title">
                            <i class="fa-solid fa-file-word highlight-icon" id="tool-main-icon"></i>
                            <span id="tool-heading-text">${d.toolHeadingText}</span>
                        </h2>
                        <p class="tool-desc" id="tool-desc-text">
                            ${d.toolDescText}
                        </p>
                    </div>

                    <!-- Upload Area -->
                    <div class="upload-dropzone" id="drop-zone">
                        <input type="file" id="file-input" class="file-input" accept=".pdf" />
                        <div class="dropzone-content">
                            <div class="dropzone-icon-pulse">
                                <i class="fa-solid fa-cloud-arrow-up"></i>
                            </div>
                            <h3 class="dropzone-title" data-i18n="dropzonePrompt">${d.dropzonePrompt}</h3>
                            <p class="dropzone-sub" data-i18n="dropzoneSub">${d.dropzoneSub}</p>
                            <button type="button" class="btn btn-primary" id="btn-select-file">
                                <i class="fa-solid fa-folder-open"></i>
                                <span data-i18n="btnBrowse">${d.btnBrowse}</span>
                            </button>
                        </div>
                    </div>

                    <!-- Selected Files & Operations Area (Hidden by default) -->
                    <div class="operations-panel hidden" id="operations-panel">
                        <div class="file-info-badge">
                            <div class="file-badge-left">
                                <div class="file-icon-box">
                                    <i class="fa-solid fa-file-pdf" id="active-file-type-icon"></i>
                                </div>
                                <div class="file-meta">
                                    <h4 class="file-name" id="display-file-name">document.pdf</h4>
                                    <div class="file-sub-meta">
                                        <span id="display-file-size">0 KB</span>
                                        <span class="dot-separator">•</span>
                                        <span id="display-file-pages">Analyzing file...</span>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn-remove-file" id="btn-remove-file" title="${d.btnChangeFile}">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <!-- Tool Specific Options -->
                        <div class="tool-options-box" id="tool-options-container">
                            <!-- Injected dynamically by JS -->
                        </div>

                        <!-- Convert Action Button -->
                        <div class="action-buttons-wrap">
                            <button type="button" class="btn btn-convert" id="btn-start-process">
                                <i class="fa-solid fa-bolt"></i>
                                <span id="btn-process-label">${d.btnProcessLabel}</span>
                            </button>
                        </div>
                    </div>

                    <!-- Processing / Progress Indicator -->
                    <div class="processing-panel hidden" id="processing-panel">
                        <div class="spinner-orbit">
                            <i class="fa-solid fa-gear fa-spin"></i>
                        </div>
                        <h4 class="process-status-title" id="process-status-title">Processing Document...</h4>
                        <div class="progress-bar-container">
                            <div class="progress-bar-fill" id="progress-bar-fill" style="width: 0%;"></div>
                        </div>
                        <p class="process-status-detail" id="process-status-detail">Extracting text page 1...</p>
                    </div>

                    <!-- Result Panel (Success State) -->
                    <div class="result-panel hidden" id="result-panel">
                        <div class="result-success-icon">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <h3 class="result-title" data-i18n="resultSuccess">${d.resultSuccess}</h3>
                        <p class="result-sub" data-i18n="resultSub">${d.resultSub}</p>

                        <div class="download-card">
                            <div class="download-info">
                                <i class="fa-solid fa-file-word download-icon" id="result-file-icon"></i>
                                <div class="download-meta">
                                    <h4 class="download-name" id="result-file-name">document.docx</h4>
                                    <span class="download-size" id="result-file-size">Size: ~50 KB</span>
                                </div>
                            </div>
                            <a href="#" class="btn btn-download" id="btn-download-result" download>
                                <i class="fa-solid fa-download"></i>
                                <span data-i18n="btnDownload">${d.btnDownload}</span>
                            </a>
                        </div>

                        <!-- Live Text Preview Accordion -->
                        <div class="preview-box" id="preview-box">
                            <button type="button" class="preview-toggle-btn" id="preview-toggle-btn">
                                <i class="fa-solid fa-eye"></i> <span data-i18n="btnPreview">${d.btnPreview}</span>
                                <i class="fa-solid fa-chevron-down toggle-caret"></i>
                            </button>
                            <div class="preview-content hidden" id="preview-content-area">
                                <textarea id="preview-textarea" readonly placeholder="${d.previewPlaceholder}"></textarea>
                            </div>
                        </div>

                        <div class="result-actions">
                            <button type="button" class="btn btn-secondary" id="btn-convert-another">
                                <i class="fa-solid fa-rotate-left"></i>
                                <span data-i18n="btnAnother">${d.btnAnother}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Middle Ad Space -->
        <div class="container ad-wrapper ad-middle-slot">
            <div class="ad-placeholder" id="ad-slot-middle">
                <span class="ad-tag" data-i18n="adTag">${d.adTag}</span>
                <div class="ad-demo-box">
                    <i class="fa-solid fa-rectangle-ad"></i>
                    <span data-i18n="adMiddleDemo">${d.adMiddleDemo}</span>
                </div>
            </div>
        </div>

        <!-- How It Works Section (SEO HowTo) -->
        <section class="section how-it-works" id="how-it-works">
            <div class="container">
                <div class="section-header text-center">
                    <h2 class="section-title" data-i18n="howTitle">${d.howTitle}</h2>
                    <p class="section-subtitle" data-i18n="howSubtitle">${d.howSubtitle}</p>
                </div>

                <div class="steps-grid">
                    <div class="step-card glass-panel">
                        <div class="step-number">01</div>
                        <div class="step-icon"><i class="fa-solid fa-file-arrow-up"></i></div>
                        <h3 class="step-heading" data-i18n="step1Title">${d.step1Title}</h3>
                        <p class="step-text" data-i18n="step1Desc">${d.step1Desc}</p>
                    </div>

                    <div class="step-card glass-panel">
                        <div class="step-number">02</div>
                        <div class="step-icon"><i class="fa-solid fa-microchip"></i></div>
                        <h3 class="step-heading" data-i18n="step2Title">${d.step2Title}</h3>
                        <p class="step-text" data-i18n="step2Desc">${d.step2Desc}</p>
                    </div>

                    <div class="step-card glass-panel">
                        <div class="step-number">03</div>
                        <div class="step-icon"><i class="fa-solid fa-file-arrow-down"></i></div>
                        <h3 class="step-heading" data-i18n="step3Title">${d.step3Title}</h3>
                        <p class="step-text" data-i18n="step3Desc">${d.step3Desc}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features & Benefits Section (SEO Trust) -->
        <section class="section features-section" id="features">
            <div class="container">
                <div class="section-header text-center">
                    <h2 class="section-title" data-i18n="featTitle">${d.featTitle}</h2>
                    <p class="section-subtitle" data-i18n="featSubtitle">${d.featSubtitle}</p>
                </div>

                <div class="features-grid">
                    <div class="feature-card glass-panel">
                        <div class="feature-icon"><i class="fa-solid fa-user-shield"></i></div>
                        <h3 class="feature-title" data-i18n="feat1Title">${d.feat1Title}</h3>
                        <p class="feature-desc" data-i18n="feat1Desc">${d.feat1Desc}</p>
                    </div>

                    <div class="feature-card glass-panel">
                        <div class="feature-icon"><i class="fa-solid fa-bolt-lightning"></i></div>
                        <h3 class="feature-title" data-i18n="feat2Title">${d.feat2Title}</h3>
                        <p class="feature-desc" data-i18n="feat2Desc">${d.feat2Desc}</p>
                    </div>

                    <div class="feature-card glass-panel">
                        <div class="feature-icon"><i class="fa-solid fa-infinity"></i></div>
                        <h3 class="feature-title" data-i18n="feat3Title">${d.feat3Title}</h3>
                        <p class="feature-desc" data-i18n="feat3Desc">${d.feat3Desc}</p>
                    </div>

                    <div class="feature-card glass-panel">
                        <div class="feature-icon"><i class="fa-solid fa-pen-to-square"></i></div>
                        <h3 class="feature-title" data-i18n="feat4Title">${d.feat4Title}</h3>
                        <p class="feature-desc" data-i18n="feat4Desc">${d.feat4Desc}</p>
                    </div>

                    <div class="feature-card glass-panel">
                        <div class="feature-icon"><i class="fa-solid fa-mobile-screen-button"></i></div>
                        <h3 class="feature-title" data-i18n="feat5Title">${d.feat5Title}</h3>
                        <p class="feature-desc" data-i18n="feat5Desc">${d.feat5Desc}</p>
                    </div>

                    <div class="feature-card glass-panel">
                        <div class="feature-icon"><i class="fa-solid fa-toolbox"></i></div>
                        <h3 class="feature-title" data-i18n="feat6Title">${d.feat6Title}</h3>
                        <p class="feature-desc" data-i18n="feat6Desc">${d.feat6Desc}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Detailed SEO Content Section -->
        <section class="section seo-content-section">
            <div class="container seo-article glass-panel">
                <article class="article-body">
                    <h2 data-i18n="artTitle">${d.artTitle}</h2>
                    <p data-i18n="artP1">${d.artP1}</p>
                    
                    <p data-i18n="artP2">${d.artP2}</p>

                    <h3 data-i18n="artH2Client">${d.artH2Client}</h3>
                    <p data-i18n="artPClient">${d.artPClient}</p>

                    <h3 data-i18n="artH2Apps">${d.artH2Apps}</h3>
                    <ul class="apps-list">
                        <li><strong data-i18n="artApp1">${d.artApp1}</strong></li>
                        <li><strong data-i18n="artApp2">${d.artApp2}</strong></li>
                        <li><strong data-i18n="artApp3">${d.artApp3}</strong></li>
                        <li><strong data-i18n="artApp4">${d.artApp4}</strong></li>
                    </ul>
                </article>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="section faq-section" id="faq">
            <div class="container">
                <div class="section-header text-center">
                    <h2 class="section-title" data-i18n="faqTitle">${d.faqTitle}</h2>
                    <p class="section-subtitle" data-i18n="faqSubtitle">${d.faqSubtitle}</p>
                </div>

                <div class="faq-list">
                    <div class="faq-item glass-panel">
                        <button class="faq-question">
                            <span data-i18n="faqQ1">${d.faqQ1}</span>
                            <i class="fa-solid fa-chevron-down faq-arrow"></i>
                        </button>
                        <div class="faq-answer">
                            <p data-i18n="faqA1">${d.faqA1}</p>
                        </div>
                    </div>

                    <div class="faq-item glass-panel">
                        <button class="faq-question">
                            <span data-i18n="faqQ2">${d.faqQ2}</span>
                            <i class="fa-solid fa-chevron-down faq-arrow"></i>
                        </button>
                        <div class="faq-answer">
                            <p data-i18n="faqA2">${d.faqA2}</p>
                        </div>
                    </div>

                    <div class="faq-item glass-panel">
                        <button class="faq-question">
                            <span data-i18n="faqQ3">${d.faqQ3}</span>
                            <i class="fa-solid fa-chevron-down faq-arrow"></i>
                        </button>
                        <div class="faq-answer">
                            <p data-i18n="faqA3">${d.faqA3}</p>
                        </div>
                    </div>

                    <div class="faq-item glass-panel">
                        <button class="faq-question">
                            <span data-i18n="faqQ4">${d.faqQ4}</span>
                            <i class="fa-solid fa-chevron-down faq-arrow"></i>
                        </button>
                        <div class="faq-answer">
                            <p data-i18n="faqA4">${d.faqA4}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Bottom Ad Space -->
        <div class="container ad-wrapper ad-footer-slot">
            <div class="ad-placeholder" id="ad-slot-bottom">
                <span class="ad-tag" data-i18n="adTag">${d.adTag}</span>
                <div class="ad-demo-box">
                    <i class="fa-solid fa-rectangle-ad"></i>
                    <span data-i18n="adBottomDemo">${d.adBottomDemo}</span>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="container footer-container">
            <div class="footer-top">
                <div class="footer-brand">
                    <div class="logo-text">
                        <span class="logo-title">PDF<span class="highlight">Word</span>Pro</span>
                        <p class="footer-tagline" data-i18n="footerTagline">${d.footerTagline}</p>
                    </div>
                </div>
                <div class="footer-links-group">
                    <div class="footer-col">
                        <h4 data-i18n="footerColFeatures">${d.footerColFeatures}</h4>
                        <ul>
                            <li><a href="#tool-section" onclick="switchTool('pdf2word')"><span data-i18n="tabPdf2Word">${d.tabPdf2Word}</span></a></li>
                            <li><a href="#tool-section" onclick="switchTool('pdf2txt')"><span data-i18n="tabPdf2Txt">${d.tabPdf2Txt}</span></a></li>
                            <li><a href="#tool-section" onclick="switchTool('merge')"><span data-i18n="tabMerge">${d.tabMerge}</span></a></li>
                            <li><a href="#tool-section" onclick="switchTool('split')"><span data-i18n="tabSplit">${d.tabSplit}</span></a></li>
                            <li><a href="#tool-section" onclick="switchTool('img2pdf')"><span data-i18n="tabImg2Pdf">${d.tabImg2Pdf}</span></a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Knowledge Base</h4>
                        <ul>
                            <li><a href="${assetPrefix}articles/">All 25 Guides & Tutorials</a></li>
                            <li><a href="${assetPrefix}articles/how-to-convert-pdf-to-word-without-losing-formatting.html">Convert Without Losing Layout</a></li>
                            <li><a href="${assetPrefix}articles/how-to-convert-scanned-pdf-to-editable-word.html">Convert Scanned PDF to Word</a></li>
                            <li><a href="${assetPrefix}articles/merge-multiple-pdf-files-into-one.html">Merge PDFs Free</a></li>
                            <li><a href="${assetPrefix}articles/split-pdf-pages-extract-pages.html">Split & Extract Pages</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer-bottom text-center">
                <p>&copy; <span id="current-year"></span> PDFWordPro. <span data-i18n="footerCopy">${d.footerCopy}</span></p>
            </div>
        </div>
    </footer>

    <!-- Toast Notification Container -->
    <div class="toast-container" id="toast-container"></div>

    <!-- External Client-Side Libraries -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
    <script src="https://unpkg.com/docx@8.5.0/build/index.umd.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/pdf-lib/dist/pdf-lib.min.js"></script>

    <!-- Main Application Logic -->
    <script src="${assetPrefix}app.js"></script>
</body>
</html>
`;
}

// Generate subdirectories: en, ja, ru, fr, id
for (const lang of Object.keys(LANGUAGES)) {
    const dir = path.resolve('d:/VSCODE/convertpdftoword.github.io', lang);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    const htmlContent = renderPage(lang, true);
    fs.writeFileSync(path.join(dir, 'index.html'), htmlContent, 'utf8');
    console.log(`Generated: ${lang}/index.html`);
}

// Generate root index.html with auto locale detection & immediate redirect to /en/ or user's language
const rootHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Free Online PDF to Word Converter – Convert PDF to DOCX Fast & Secure</title>
    <meta name="description" content="Free client-side PDF to Word (.docx) converter without limitations. Super fast, 100% private in browser with zero server uploads. High quality editable DOCX output.">
    <link rel="canonical" href="https://convertpdftoword.github.io/en/">
    <link rel="alternate" hreflang="x-default" href="https://convertpdftoword.github.io/en/">
    <link rel="alternate" hreflang="en" href="https://convertpdftoword.github.io/en/">
    <link rel="alternate" hreflang="ja" href="https://convertpdftoword.github.io/ja/">
    <link rel="alternate" hreflang="ru" href="https://convertpdftoword.github.io/ru/">
    <link rel="alternate" hreflang="fr" href="https://convertpdftoword.github.io/fr/">
    <link rel="alternate" hreflang="id" href="https://convertpdftoword.github.io/id/">
    <meta http-equiv="refresh" content="0; url=./en/">
    <script>
    (function() {
        var saved = localStorage.getItem('pdf_lang');
        var browserLang = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
        var supported = ['en', 'ja', 'ru', 'fr', 'id'];
        var target = (saved && supported.indexOf(saved) !== -1) ? saved : (supported.indexOf(browserLang) !== -1 ? browserLang : 'en');
        window.location.replace('./' + target + '/');
    })();
    </script>
</head>
<body style="background:#0a0e1a; color:#fff; font-family:sans-serif; text-align:center; padding-top:60px;">
    <h2>Redirecting to PDFWordPro...</h2>
    <p>If you are not redirected automatically, select your language:</p>
    <p>
        <a href="./en/" style="color:#818cf8; margin: 0 10px;">English</a> |
        <a href="./ja/" style="color:#818cf8; margin: 0 10px;">日本語</a> |
        <a href="./ru/" style="color:#818cf8; margin: 0 10px;">Русский</a> |
        <a href="./fr/" style="color:#818cf8; margin: 0 10px;">Français</a> |
        <a href="./id/" style="color:#818cf8; margin: 0 10px;">Bahasa Indonesia</a>
    </p>
</body>
</html>`;

fs.writeFileSync('d:/VSCODE/convertpdftoword.github.io/index.html', rootHtml, 'utf8');
console.log('Generated: root index.html');

// Generate comprehensive sitemap.xml with all 5 languages
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://convertpdftoword.github.io/</loc>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://convertpdftoword.github.io/en/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://convertpdftoword.github.io/en/"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://convertpdftoword.github.io/ja/"/>
    <xhtml:link rel="alternate" hreflang="ru" href="https://convertpdftoword.github.io/ru/"/>
    <xhtml:link rel="alternate" hreflang="fr" href="https://convertpdftoword.github.io/fr/"/>
    <xhtml:link rel="alternate" hreflang="id" href="https://convertpdftoword.github.io/id/"/>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://convertpdftoword.github.io/en/</loc>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://convertpdftoword.github.io/en/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://convertpdftoword.github.io/en/"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://convertpdftoword.github.io/ja/"/>
    <xhtml:link rel="alternate" hreflang="ru" href="https://convertpdftoword.github.io/ru/"/>
    <xhtml:link rel="alternate" hreflang="fr" href="https://convertpdftoword.github.io/fr/"/>
    <xhtml:link rel="alternate" hreflang="id" href="https://convertpdftoword.github.io/id/"/>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://convertpdftoword.github.io/ja/</loc>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://convertpdftoword.github.io/en/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://convertpdftoword.github.io/en/"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://convertpdftoword.github.io/ja/"/>
    <xhtml:link rel="alternate" hreflang="ru" href="https://convertpdftoword.github.io/ru/"/>
    <xhtml:link rel="alternate" hreflang="fr" href="https://convertpdftoword.github.io/fr/"/>
    <xhtml:link rel="alternate" hreflang="id" href="https://convertpdftoword.github.io/id/"/>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://convertpdftoword.github.io/ru/</loc>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://convertpdftoword.github.io/en/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://convertpdftoword.github.io/en/"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://convertpdftoword.github.io/ja/"/>
    <xhtml:link rel="alternate" hreflang="ru" href="https://convertpdftoword.github.io/ru/"/>
    <xhtml:link rel="alternate" hreflang="fr" href="https://convertpdftoword.github.io/fr/"/>
    <xhtml:link rel="alternate" hreflang="id" href="https://convertpdftoword.github.io/id/"/>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://convertpdftoword.github.io/fr/</loc>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://convertpdftoword.github.io/en/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://convertpdftoword.github.io/en/"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://convertpdftoword.github.io/ja/"/>
    <xhtml:link rel="alternate" hreflang="ru" href="https://convertpdftoword.github.io/ru/"/>
    <xhtml:link rel="alternate" hreflang="fr" href="https://convertpdftoword.github.io/fr/"/>
    <xhtml:link rel="alternate" hreflang="id" href="https://convertpdftoword.github.io/id/"/>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://convertpdftoword.github.io/id/</loc>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://convertpdftoword.github.io/en/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://convertpdftoword.github.io/en/"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://convertpdftoword.github.io/ja/"/>
    <xhtml:link rel="alternate" hreflang="ru" href="https://convertpdftoword.github.io/ru/"/>
    <xhtml:link rel="alternate" hreflang="fr" href="https://convertpdftoword.github.io/fr/"/>
    <xhtml:link rel="alternate" hreflang="id" href="https://convertpdftoword.github.io/id/"/>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://convertpdftoword.github.io/all-tools.html</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://convertpdftoword.github.io/articles/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
`;

fs.writeFileSync('d:/VSCODE/convertpdftoword.github.io/sitemap.xml', sitemapXml, 'utf8');
console.log('Generated: sitemap.xml with all 5 multilingual paths');
