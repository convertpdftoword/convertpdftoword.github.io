/**
 * PDFWordPro - Client-Side Engine
 * 100% In-Browser PDF to Word, Merge, Split, Image-to-PDF
 * Zero Server Uploads | High Performance | Privacy Focused
 */

// Configure PDF.js Worker
if (window.pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// Translations Dictionary (ID & EN)
const i18n = {
    id: {
        navTools: "Semua Tools",
        navGuide: "Panduan",
        navSecurity: "Keamanan",
        navFaq: "FAQ",
        badgeText: "100% Privasi Terjamin: File Diproses di Browser Tanpa Upload ke Server",
        heroTitle: "Convert PDF ke Word Online Gratis",
        heroSubtitle: "Ubah dokumen PDF menjadi file Microsoft Word (.docx) yang dapat diedit secara cepat, rapi, dan mudah tanpa batasan kuota.",
        dropzonePrompt: "Pilih atau Seret File PDF ke Sini",
        dropzoneSub: "Mendukung semua file dokumen PDF (Tanpa batasan ukuran)",
        btnBrowse: "Pilih Dokumen PDF",
        resultSuccess: "Konversi Selesai!",
        resultSub: "File Anda telah berhasil dikonversi dan siap diunduh.",
        btnDownload: "Download Dokumen (.DOCX)",
        btnPreview: "Pratinjau Hasil Teks",
        btnAnother: "Konversi File Lain",
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
        feat6Desc: "Selain PDF ke Word, tersedia alat bantu gabung PDF, pemisah halaman PDF, hingga konversi gambar ke PDF dalam 1 website.",
        faqTitle: "Pertanyaan yang Sering Diajukan (FAQ)",
        faqSubtitle: "Jawaban atas pertanyaan umum seputar layanan convert PDF ke Word kami.",
        faqQ1: "Apakah layanan konversi ini benar-benar gratis tanpa batas?",
        faqA1: "Ya, layanan ini 100% gratis selamanya. Tidak ada batasan jumlah konversi dokumen per hari, dan Anda tidak perlu memasukkan email atau kartu kredit.",
        faqQ2: "Bagaimana privasi dan keamanan dokumen saya dijaga?",
        faqA2: "Kami menerapkan prinsip Client-Side Processing. Dokumen Anda tidak pernah diunggah ke server mana pun melalui internet. Seluruh proses pembacaan PDF dan pembuatan file Word terjadi secara lokal di memori browser Anda.",
        faqQ3: "Apakah bisa convert PDF hasil scan ke Word?",
        faqA3: "Konverter ini mengekstrak teks berbasis vektor dan font standar. Jika dokumen Anda adalah hasil foto scan murni (gambar bitmap), teks mungkin tidak dapat diekstrak tanpa modul OCR. Untuk dokumen teks biasa, hasil konversi akan sangat rapi.",
        faqQ4: "Apakah bisa digunakan di smartphone (Android / iPhone)?",
        faqA4: "Tentu saja! Website ini dirancang responsif dan dapat diakses dengan lancar melalui browser Chrome, Safari, Firefox, atau Edge di ponsel Anda."
    },
    en: {
        navTools: "All Tools",
        navGuide: "Guide",
        navSecurity: "Security",
        navFaq: "FAQ",
        badgeText: "100% Privacy Guaranteed: Processed Directly in Browser Without Server Upload",
        heroTitle: "Free Online PDF to Word Converter",
        heroSubtitle: "Convert PDF documents to editable Microsoft Word (.docx) files quickly, cleanly, and easily without quotas or limits.",
        dropzonePrompt: "Select or Drag & Drop PDF File Here",
        dropzoneSub: "Supports all PDF document files (No file size limits)",
        btnBrowse: "Choose PDF Document",
        resultSuccess: "Conversion Complete!",
        resultSub: "Your file has been converted successfully and is ready to download.",
        btnDownload: "Download Document (.DOCX)",
        btnPreview: "Preview Extracted Text",
        btnAnother: "Convert Another File",
        howTitle: "How to Convert PDF to Word in 3 Easy Steps",
        howSubtitle: "The fastest document conversion process without installing extra software.",
        step1Title: "1. Upload PDF File",
        step1Desc: "Select your PDF from PC or phone, or simply drag and drop the file into the upload zone.",
        step2Title: "2. Automatic Processing",
        step2Desc: "Our system parses PDF pages directly in your browser, extracting text and reconstructing Word (.docx) structure.",
        step3Title: "3. Download Word File",
        step3Desc: "Click the download button and your new editable Word document is saved instantly.",
        featTitle: "Why Choose PDFWordPro Converter?",
        featSubtitle: "The premier document conversion solution built for speed, privacy, and simplicity.",
        feat1Title: "100% Privacy Protected",
        feat1Desc: "Your files are never transmitted to the internet or stored on external servers. All computing happens right in your browser.",
        feat2Title: "Lightning-Fast Speed",
        feat2Desc: "With zero upload and download waits to a remote cloud server, conversion finishes in seconds.",
        feat3Title: "Unlimited & Always Free",
        feat3Desc: "No daily quotas, no sign-up required, no credit card needed. Use it whenever you need.",
        feat4Title: "Editable DOCX Format",
        feat4Desc: "Output is fully compatible with Microsoft Office Word, Google Docs, LibreOffice Writer, and WPS Office.",
        feat5Title: "All Devices Supported",
        feat5Desc: "Works smoothly on Windows, macOS, Linux, Android, iOS, and Chromebook.",
        feat6Title: "Comprehensive PDF Suite",
        feat6Desc: "Beyond PDF to Word, access PDF merge, page splitter, and image to PDF tools in one place.",
        faqTitle: "Frequently Asked Questions (FAQ)",
        faqSubtitle: "Answers to common questions regarding our PDF to Word converter.",
        faqQ1: "Is this conversion service completely free?",
        faqA1: "Yes, it is 100% free forever without daily caps, no hidden fees, and no sign-up needed.",
        faqQ2: "How is my document privacy and security guaranteed?",
        faqA2: "We employ client-side processing. Your documents are never uploaded to any cloud server. Everything runs locally in your browser memory.",
        faqQ3: "Can it convert scanned PDFs to Word?",
        faqA3: "This converter extracts text and vector elements. Pure photo scans (raster images) require OCR. Standard digital PDFs convert cleanly.",
        faqQ4: "Can I use this on mobile phones (Android / iOS)?",
        faqA4: "Yes! Our responsive web design functions seamlessly across Chrome, Safari, Firefox, and Edge on smartphones."
    }
};

// Global App State
let currentLang = 'id';
let currentTool = 'pdf2word';
let selectedFiles = [];
let generatedDownloadUrl = null;
let lastExtractedText = '';

// DOM Elements
const body = document.body;
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIcon = document.getElementById('theme-icon');
const langToggleBtn = document.getElementById('lang-toggle-btn');
const currentLangText = document.getElementById('current-lang-text');

// Tools UI Elements
const toolTabs = document.querySelectorAll('.tool-tab');
const currentToolTitle = document.getElementById('tool-heading-text');
const currentToolDesc = document.getElementById('tool-desc-text');
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

// Tool Definitions
const TOOLS_CONFIG = {
    pdf2word: {
        title: "Konverter PDF ke Word (.docx)",
        desc: "Ekstrak teks, paragraf, dan tata letak dokumen PDF menjadi file Word (.docx) resmi yang siap diedit.",
        accept: ".pdf",
        multiple: false,
        btnText: "Konversi ke Word Sekarang",
        downloadExt: ".docx",
        icon: "fa-file-word",
        hasPreview: true
    },
    pdf2txt: {
        title: "Konverter PDF ke Teks (.txt)",
        desc: "Ekstrak teks murni dari dokumen PDF secara cepat untuk kebutuhan analisis, catatan, atau artikel.",
        accept: ".pdf",
        multiple: false,
        btnText: "Ekstrak Teks Sekarang",
        downloadExt: ".txt",
        icon: "fa-file-lines",
        hasPreview: true
    },
    merge: {
        title: "Gabung Banyak PDF (Merge)",
        desc: "Satukan 2 atau lebih file PDF menjadi 1 file PDF utuh dengan urutan yang rapi.",
        accept: ".pdf",
        multiple: true,
        btnText: "Gabungkan File PDF",
        downloadExt: "_merged.pdf",
        icon: "fa-object-group",
        hasPreview: false
    },
    split: {
        title: "Pisah Halaman PDF (Split)",
        desc: "Ambil halaman tertentu atau rentang halaman dari dokumen PDF Anda menjadi file baru.",
        accept: ".pdf",
        multiple: false,
        btnText: "Pisahkan Halaman Sekarang",
        downloadExt: "_split.pdf",
        icon: "fa-scissors",
        hasPreview: false
    },
    img2pdf: {
        title: "Konverter Gambar ke PDF",
        desc: "Ubah foto JPG atau PNG menjadi dokumen PDF berkualitas tinggi secara instan.",
        accept: "image/png, image/jpeg, image/jpg",
        multiple: true,
        btnText: "Buat File PDF dari Gambar",
        downloadExt: "_images.pdf",
        icon: "fa-images",
        hasPreview: false
    }
};

/* ===================================================================
   Initialize & Event Listeners
   =================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Set current year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Theme initialization
    const savedTheme = localStorage.getItem('pdf_theme') || 'dark';
    setTheme(savedTheme);

    // Language initialization
    const savedLang = localStorage.getItem('pdf_lang') || 'id';
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

    // Language toggle
    langToggleBtn.addEventListener('click', () => {
        const newLang = currentLang === 'id' ? 'en' : 'id';
        setLanguage(newLang);
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
   Theme & Language
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
    currentLang = lang;
    localStorage.setItem('pdf_lang', lang);
    currentLangText.textContent = lang.toUpperCase();

    const dict = i18n[lang] || i18n.id;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Update active tool texts
    updateToolHeader();
}

/* ===================================================================
   Tool Switching Logic
   =================================================================== */
window.switchTool = function(toolKey) {
    if (!TOOLS_CONFIG[toolKey]) return;
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
    const config = TOOLS_CONFIG[currentTool];
    currentToolTitle.textContent = config.title;
    currentToolDesc.textContent = config.desc;
    fileInput.accept = config.accept;
    fileInput.multiple = config.multiple;
    btnProcessLabel.textContent = config.btnText;
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
    const config = TOOLS_CONFIG[currentTool];

    if (!config.multiple) {
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
        displayFilePages.textContent = "Menganalisis file...";

        // Inspect PDF page count if PDF
        if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
            try {
                const arrayBuffer = await file.slice(0, 1024 * 512).arrayBuffer(); // quick read
                const pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
                displayFilePages.textContent = `${pdf.numPages} Halaman`;
            } catch (err) {
                displayFilePages.textContent = "Dokumen PDF Siap";
            }
        } else {
            displayFilePages.textContent = "File Gambar";
        }
    } else {
        displayFileName.textContent = `${selectedFiles.length} File Dipilih`;
        const totalSize = selectedFiles.reduce((acc, f) => acc + f.size, 0);
        displayFileSize.textContent = formatBytes(totalSize);
        displayFilePages.textContent = "Siap Digabungkan";
    }

    // Render tool-specific options (e.g. page range for split tool)
    renderToolOptions();
}

function renderToolOptions() {
    toolOptionsContainer.innerHTML = '';

    if (currentTool === 'split') {
        toolOptionsContainer.innerHTML = `
            <div style="text-align: left;">
                <label style="display:block; font-size:0.9rem; font-weight:600; margin-bottom:8px;">
                    <i class="fa-solid fa-list-ol"></i> Rentang Halaman yang Ingin Diambil:
                </label>
                <input type="text" id="split-range-input" placeholder="Contoh: 1-3, 5 (Kosongkan untuk ambil halaman 1)" 
                    style="width:100%; padding:10px 14px; background:var(--bg-surface); border:1px solid var(--border-glass); border-radius:var(--radius-sm); color:var(--text-primary); outline:none;">
                <small style="display:block; color:var(--text-muted); margin-top:6px; font-size:0.8rem;">
                    Format: nomor halaman dipisah tanda koma atau rentang strip (misal: 1, 3, 5-7).
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
                    <i class="fa-solid fa-layer-group"></i> Urutan File yang Akan Digabung:
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
                <span>Format dokumen valid. File akan diproses lokal tanpa meninggalkan browser Anda.</span>
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
    if (selectedFiles.length === 0) {
        showToast("Silakan pilih file terlebih dahulu!", "warning");
        return;
    }

    // Switch to processing UI
    operationsPanel.classList.add('hidden');
    processingPanel.classList.remove('hidden');
    progressBarFill.style.width = '10%';
    processStatusTitle.textContent = "Memulai Pemrosesan...";
    processStatusDetail.textContent = "Menyiapkan mesin pengolah dokumen...";

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
                throw new Error("Tool tidak dikenali");
        }
    } catch (err) {
        console.error("Conversion error:", err);
        showToast("Terjadi kesalahan saat memproses file: " + (err.message || err), "error");
        processingPanel.classList.add('hidden');
        operationsPanel.classList.remove('hidden');
    }
}

/* ===================================================================
   1. PDF to Word (.docx) Engine (Client-Side)
   =================================================================== */
async function runPdfToWord(file) {
    if (!window.docx) {
        throw new Error("Library docx belum dimuat dengan sempurna. Periksa koneksi internet Anda.");
    }

    processStatusTitle.textContent = "Membaca Dokumen PDF...";
    progressBarFill.style.width = '20%';

    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const totalPages = pdfDoc.numPages;

    const docChildren = [];
    let combinedTextPreview = '';

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        const progress = Math.round(20 + ((pageNum / totalPages) * 60));
        progressBarFill.style.width = `${progress}%`;
        processStatusTitle.textContent = `Mengekstrak Halaman ${pageNum} dari ${totalPages}...`;
        processStatusDetail.textContent = "Menganalisis teks, font, dan struktur paragraf...";

        const page = await pdfDoc.getPage(pageNum);
        const textContent = await page.getTextContent();

        // Extract items and reconstruct lines
        const lines = reconstructLinesFromPdf(textContent.items);

        for (const line of lines) {
            if (!line.trim()) continue;
            combinedTextPreview += line + '\n';

            // Detect heading based on length or capital letters
            const isHeading = line.length < 60 && (line === line.toUpperCase() || line.startsWith('BAB ') || line.startsWith('CHAPTER '));

            if (isHeading) {
                docChildren.push(
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                text: line,
                                bold: true,
                                size: 28, // 14pt
                                color: "2B579A" // Word heading blue
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
            combinedTextPreview += '\n--- [Batas Halaman] ---\n\n';
            docChildren.push(
                new docx.Paragraph({
                    children: [new docx.PageBreak()]
                })
            );
        }
    }

    progressBarFill.style.width = '85%';
    processStatusTitle.textContent = "Menyusun Dokumen Word (.docx)...";
    processStatusDetail.textContent = "Membungkus metadata dan struktur XML dokumen...";

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
                    children: [new docx.TextRun("Dokumen hasil konversi dari PDF.")]
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
    processStatusTitle.textContent = "Membaca Dokumen PDF...";
    progressBarFill.style.width = '30%';

    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const totalPages = pdfDoc.numPages;

    let fullText = '';

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        const progress = Math.round(30 + ((pageNum / totalPages) * 60));
        progressBarFill.style.width = `${progress}%`;
        processStatusTitle.textContent = `Mengekstrak Halaman ${pageNum} dari ${totalPages}...`;

        const page = await pdfDoc.getPage(pageNum);
        const textContent = await page.getTextContent();
        const lines = reconstructLinesFromPdf(textContent.items);

        fullText += `=== Halaman ${pageNum} ===\n\n`;
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
    if (files.length < 2) {
        throw new Error("Pilih minimal 2 file PDF untuk digabungkan!");
    }

    processStatusTitle.textContent = "Membuat Dokumen PDF Gabungan...";
    progressBarFill.style.width = '20%';

    const mergedPdf = await PDFLib.PDFDocument.create();

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const progress = Math.round(20 + ((i / files.length) * 70));
        progressBarFill.style.width = `${progress}%`;
        processStatusTitle.textContent = `Menambahkan file ${i + 1} dari ${files.length}...`;
        processStatusDetail.textContent = file.name;

        const fileBuffer = await file.arrayBuffer();
        const pdf = await PDFLib.PDFDocument.load(fileBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    progressBarFill.style.width = '95%';
    processStatusTitle.textContent = "Menyimpan file PDF gabungan...";
    const mergedPdfBytes = await mergedPdf.save();
    const mergedBlob = new Blob([mergedPdfBytes], { type: 'application/pdf' });

    progressBarFill.style.width = '100%';
    showResultScreen(mergedBlob, `Merged_Document_${Date.now()}.pdf`, "File PDF berhasil digabungkan.", 'fa-object-group');
}

/* ===================================================================
   4. Split PDF Engine (pdf-lib)
   =================================================================== */
async function runSplitPdf(file) {
    processStatusTitle.textContent = "Membaca Halaman PDF...";
    progressBarFill.style.width = '30%';

    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
    const totalPages = pdfDoc.getPageCount();

    const rangeInput = document.getElementById('split-range-input');
    const rangeText = (rangeInput ? rangeInput.value.trim() : '') || '1';

    // Parse target page numbers
    const targetPages = parsePageRange(rangeText, totalPages);
    if (targetPages.length === 0) {
        throw new Error("Nomor halaman yang Anda masukkan tidak valid!");
    }

    progressBarFill.style.width = '60%';
    processStatusTitle.textContent = `Mengekstrak ${targetPages.length} halaman terpilih...`;

    const newPdf = await PDFLib.PDFDocument.create();
    // Indices are 0-based in pdf-lib
    const zeroBasedIndices = targetPages.map(p => p - 1);
    const copiedPages = await newPdf.copyPages(pdfDoc, zeroBasedIndices);
    copiedPages.forEach(p => newPdf.addPage(p));

    progressBarFill.style.width = '90%';
    const splitBytes = await newPdf.save();
    const splitBlob = new Blob([splitBytes], { type: 'application/pdf' });

    const baseName = file.name.replace(/\.[^/.]+$/, "");
    progressBarFill.style.width = '100%';
    showResultScreen(splitBlob, `${baseName}_pages_${rangeText.replace(/[^0-9-]/g, '_')}.pdf`, `Halaman ${targetPages.join(', ')} berhasil diekstrak.`, 'fa-scissors');
}

/* ===================================================================
   5. Images to PDF Engine (pdf-lib)
   =================================================================== */
async function runImagesToPdf(files) {
    processStatusTitle.textContent = "Mengonversi Gambar ke PDF...";
    progressBarFill.style.width = '20%';

    const pdfDoc = await PDFLib.PDFDocument.create();

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const progress = Math.round(20 + ((i / files.length) * 70));
        progressBarFill.style.width = `${progress}%`;
        processStatusTitle.textContent = `Menyisipkan gambar ${i + 1} dari ${files.length}...`;

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
    showResultScreen(pdfBlob, `Images_to_PDF_${Date.now()}.pdf`, "Semua gambar berhasil disatukan dalam file PDF.", 'fa-images');
}

/* ===================================================================
   Result Display & Helpers
   =================================================================== */
function showResultScreen(blob, fileName, previewText, iconClass) {
    processingPanel.classList.add('hidden');
    resultPanel.classList.remove('hidden');

    if (generatedDownloadUrl) {
        URL.revokeObjectURL(generatedDownloadUrl);
    }
    generatedDownloadUrl = URL.createObjectURL(blob);

    resultFileName.textContent = fileName;
    resultFileSize.textContent = `Ukuran: ${formatBytes(blob.size)}`;

    const resultIcon = document.getElementById('result-file-icon');
    if (resultIcon) {
        resultIcon.className = `fa-solid ${iconClass} download-icon`;
    }

    btnDownloadResult.href = generatedDownloadUrl;
    btnDownloadResult.download = fileName;

    // Setup preview
    if (previewText && TOOLS_CONFIG[currentTool].hasPreview) {
        previewBox.classList.remove('hidden');
        previewTextarea.value = previewText;
    } else {
        previewBox.classList.add('hidden');
    }

    showToast("Berhasil dikonversi! Klik tombol download untuk menyimpan.", "success");
}

function reconstructLinesFromPdf(items) {
    if (!items || items.length === 0) return [];

    // Group text items by roughly equal Y position (with small tolerance)
    const linesMap = new Map();
    const tolerance = 4; // pt tolerance for same line

    for (const item of items) {
        const text = item.str;
        if (!text && text !== ' ') continue;

        const y = Math.round(item.transform[5]);
        const x = item.transform[4];

        // Find existing close line Y
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

    // Sort lines by Y descending (PDF coordinates origin at bottom)
    const sortedY = Array.from(linesMap.keys()).sort((a, b) => b - a);
    const resultLines = [];

    for (const y of sortedY) {
        const lineItems = linesMap.get(y);
        // Sort items in line by X ascending
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
