set clipboard=unnamed
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" ����GVIM�˵�������
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
source $VIMRUNTIME/delmenu.vim
source $VIMRUNTIME/menu.vim
" ���ڴ�С
set lines=35 columns=200
" �ָ�����Ĵ���λ�ڵ�ǰ�����±�/�ұ�
set splitbelow
set splitright
"����ʾ����/�˵���
set guioptions-=T
set guioptions-=m
set guioptions-=L
set guioptions-=r
set guioptions-=b
" ʹ������ tab ��ʽ������ gui
set guioptions-=e
set nolist

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"nerdtree
map <C-n> :NERDTreeToggle<CR>

"tablist
map <C-t> :TlistToggle<CR>
let Tlist_Ctags_Cmd = '/usr/bin/ctags'
let Tlist_Show_One_File = 1
let Tlist_Inc_WinWidth = 0
let Tlist_Exit_OnlyWindow = 1
let Tlist_Auto_Open = 0
let Tlist_Use_Right_Window = 1

" ��������
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
imap ;; <ESC>A;
imap aa +
imap ee =
imap s<Space>s -
imap jj <ESC>A{
imap kk <ESC>

noremap <UP> <NOP>
noremap <DOWN> <NOP>
noremap <LEFT> <NOP>
noremap <RIGHT> <NOP>
noremap <CR> o<ESC>

inoremap <UP> <NOP>
inoremap <DOWN> <NOP>
inoremap <LEFT> <NOP>
inoremap <RIGHT> <NOP>
cd D:\SourceCode
let g:coc_global_extensions = ['coc-json','coc-css','coc-java','coc-vimlsp']

"coc config

" Set internal encoding of vim, not needed on neovim, since coc.nvim using some
" unicode characters in the file autoload/float.vim
set encoding=utf-8

" TextEdit might fail if hidden is not set.
set hidden

" Having longer updatetime (default is 4000 ms = 4 s) leads to noticeable
" delays and poor user experience.
set updatetime=100

" Don't pass messages to |ins-completion-menu|.
set shortmess+=c

" Always show the signcolumn, otherwise it would shift the text each time
" diagnostics appear/become resolved.
if has("nvim-0.5.0") || has("patch-8.1.1564")
  " Recently vim can merge signcolumn and number column into one
  set signcolumn=number
else
  set signcolumn=yes
endif

" Use tab for trigger completion with characters ahead and navigate.
" NOTE: Use command ':verbose imap <tab>' to make sure tab is not mapped by
" other plugin before putting this into your config.
inoremap <silent><expr> <TAB>
      \ pumvisible() ? "\<C-n>" :
      \ <SID>check_back_space() ? "\<TAB>" :
      \ coc#refresh()
inoremap <expr><S-TAB> pumvisible() ? "\<C-p>" : "\<C-h>"

function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

" Use <c-space> to trigger completion.
if has('nvim')
  inoremap <silent><expr> <c-space> coc#refresh()
else
  inoremap <silent><expr> <c-@> coc#refresh()
endif

" Make <CR> auto-select the first completion item and notify coc.nvim to
" format on enter, <cr> could be remapped by other vim plugin
inoremap <silent><expr> <cr> pumvisible() ? coc#_select_confirm()
                              \: "\<C-g>u\<CR>\<c-r>=coc#on_enter()\<CR>"

" Use `[g` and `]g` to navigate diagnostics
" Use `:CocDiagnostics` to get all diagnostics of current buffer in location list.
nmap <silent> [g <Plug>(coc-diagnostic-prev)
nmap <silent> ]g <Plug>(coc-diagnostic-next)

" GoTo code navigation.
nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gi <Plug>(coc-implementation)
nmap <silent> gr <Plug>(coc-references)

" Use K to show documentation in preview window.
nnoremap <silent> K :call <SID>show_documentation()<CR>

function! s:show_documentation()
  if (index(['vim','help'], &filetype) >= 0)
    execute 'h '.expand('<cword>')
  elseif (coc#rpc#ready())
    call CocActionAsync('doHover')
  else
    execute '!' . &keywordprg . " " . expand('<cword>')
  endif
endfunction


" Highlight the symbol and its references when holding the cursor.
autocmd CursorHold * silent call CocActionAsync('highlight')

" Symbol renaming.
nmap <leader>rn <Plug>(coc-rename)

" Formatting selected code.
xmap <leader>f  <Plug>(coc-format-selected)
nmap <leader>f  <Plug>(coc-format-selected)

augroup mygroup
  autocmd!
  " Setup formatexpr specified filetype(s).
  autocmd FileType typescript,json setl formatexpr=CocAction('formatSelected')
  " Update signature help on jump placeholder.
  autocmd User CocJumpPlaceholder call CocActionAsync('showSignatureHelp')
augroup end

" Applying codeAction to the selected region.
" Example: `<leader>aap` for current paragraph
xmap <leader>a  <Plug>(coc-codeaction-selected)
nmap <leader>a  <Plug>(coc-codeaction-selected)

" Remap keys for applying codeAction to the current buffer.
nmap <leader>ac  <Plug>(coc-codeaction)
" Apply AutoFix to problem on the current line.
nmap <leader>qf  <Plug>(coc-fix-current)

" Map function and class text objects
" NOTE: Requires 'textDocument.documentSymbol' support from the language server.
xmap if <Plug>(coc-funcobj-i)
omap if <Plug>(coc-funcobj-i)
xmap af <Plug>(coc-funcobj-a)
omap af <Plug>(coc-funcobj-a)
xmap ic <Plug>(coc-classobj-i)
omap ic <Plug>(coc-classobj-i)
xmap ac <Plug>(coc-classobj-a)
omap ac <Plug>(coc-classobj-a)

" Remap <C-f> and <C-b> for scroll float windows/popups.
if has('nvim-0.4.0') || has('patch-8.2.0750')
  nnoremap <silent><nowait><expr> <C-f> coc#float#has_scroll() ? coc#float#scroll(1) : "\<C-f>"
  nnoremap <silent><nowait><expr> <C-b> coc#float#has_scroll() ? coc#float#scroll(0) : "\<C-b>"
  inoremap <silent><nowait><expr> <C-f> coc#float#has_scroll() ? "\<c-r>=coc#float#scroll(1)\<cr>" : "\<Right>"
  inoremap <silent><nowait><expr> <C-b> coc#float#has_scroll() ? "\<c-r>=coc#float#scroll(0)\<cr>" : "\<Left>"
  vnoremap <silent><nowait><expr> <C-f> coc#float#has_scroll() ? coc#float#scroll(1) : "\<C-f>"
  vnoremap <silent><nowait><expr> <C-b> coc#float#has_scroll() ? coc#float#scroll(0) : "\<C-b>"
endif

" Use CTRL-S for selections ranges.
" Requires 'textDocument/selectionRange' support of language server.
nmap <silent> <C-s> <Plug>(coc-range-select)
xmap <silent> <C-s> <Plug>(coc-range-select)

" Add `:Format` command to format current buffer.
command! -nargs=0 Format :call CocAction('format')

" Add `:Fold` command to fold current buffer.
command! -nargs=? Fold :call     CocAction('fold', <f-args>)

" Add `:OR` command for organize imports of the current buffer.
command! -nargs=0 OR   :call     CocAction('runCommand', 'editor.action.organizeImport')

" Add (Neo)Vim's native statusline support.
" NOTE: Please see `:h coc-status` for integrations with external plugins that
" provide custom statusline: lightline.vim, vim-airline.
set statusline^=%{coc#status()}%{get(b:,'coc_current_function','')}

" Mappings for CoCList
" Show all diagnostics.
nnoremap <silent><nowait> <space>a  :<C-u>CocList diagnostics<cr>
" Manage extensions.
nnoremap <silent><nowait> <space>e  :<C-u>CocList extensions<cr>
" Show commands.
nnoremap <silent><nowait> <space>c  :<C-u>CocList commands<cr>
" Find symbol of current document.
nnoremap <silent><nowait> <space>o  :<C-u>CocList outline<cr>
" Search workspace symbols.
nnoremap <silent><nowait> <space>s  :<C-u>CocList -I symbols<cr>
" Do default action for next item.
nnoremap <silent><nowait> <space>j  :<C-u>CocNext<CR>
" Do default action for previous item.
nnoremap <silent><nowait> <space>k  :<C-u>CocPrev<CR>
" Resume latest coc list.
nnoremap <silent><nowait> <space>p  :<C-u>CocListResume<CR>

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" ͨ������
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set noswapfile "�ر�����swapfile����
set nocompatible    "���ò�����ԭʼviģʽ
"filetype on     "���ÿ����ļ��������
filetype plugin on  "���ض�Ӧ�ļ����Ͳ��
syntax enable       "�����﷨��������
syntax on       "�Զ��﷨����
set t_Co=256        "����256ɫ֧��
set showcmd     "selectģʽ����ʾѡ�е�����
set ruler       "������ʾ����λ��
set laststatus=2    "������ʾ״̬��
set number      "�����к���ʾ
set cursorline      "������ʾ��ǰ��
set guifont=Courier\ New:h14  "���������С
au GUIEnter * simalt ~x "�������
"set encoding=utf-8

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" �����������Ű�
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set autoindent      "�����Զ�����
set smartindent     "����ѡ����뷽ʽ
filetype indent on  "����Ӧ��ͬ���Ե���������
set expandtab       "���Ʊ����չΪ�ո�
set tabstop=4       "���ñ༭ʱ�Ʊ����ռ�Ŀո���
set shiftwidth=4    "���ø�ʽ��ʱ�Ʊ��ռ�õĿո���
set softtabstop=4       "����4���ո�Ϊ�Ʊ��
set smarttab        "���кͶο�ʼ��ʹ���Ʊ��
"set nowrap     "��ֹ����
set backspace=2     "ʹ�ûس�����������indent.eol,start��

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" ���벹ȫ
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set wildmenu        "vim����������ģʽ���ܲ�ȫ
set completeopt-=preview    "��ȫʱ����ʾ���ڣ�ֻ��ʾ��ȫ�б�

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"�����۵�
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set foldmethod=syntax       "���û����﷨���д����۵�
set nofoldenable            "�رմ����۵�

set nocompatible              " ȥ��VIһ����,����Ҫ���
filetype off                  " ����Ҫ���

" ���ð���vundle�ͳ�ʼ����ص�runtime path
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" ��һ��ѡ��, ָ��һ��vundle��װ�����·��
"call vundle#begin('~/some/path/here')

" ��vundle�������汾,����
Plugin 'VundleVim/Vundle.vim'

" ���·�������֧�ֲ�ͬ��ʽ�Ĳ����װ.
" �뽫��װ������������vundle#begin��vundle#end֮��.
" Github�ϵĲ��
" ��ʽΪ Plugin '�û���/����ֿ���'
" ���� http://vim-scripts.org/vim/scripts.html �Ĳ��
" Plugin '�������' ʵ������ Plugin 'vim-scripts/����ֿ���' ֻ�Ǵ˴����û�������ʡ��
"Plugin 'L9'
" ��Git֧�ֵ�����github�ϵĲ���ֿ� Plugin 'git clone ����ĵ�ַ'
"Plugin 'git://git.wincent.com/command-t.git'
" ���ص�Git�ֿ�(�����Լ��Ĳ��) Plugin 'file:///+���ز���ֿ����·��'
"Plugin 'file:///home/gmarik/path/to/plugin'
" ����ڲֿ����Ŀ¼��.
" ��ȷָ��·����������runtimepath. ���·��������sparkup/vimĿ¼��
"Plugin 'rstacruz/sparkup', {'rtp': 'vim/'}
" ��װL9������Ѿ���װ�������������������¸�ʽ����������ͻ
"Plugin 'ascenator/L9', {'name': 'newL9'}

Plugin 'tpope/vim-fugitive'

"Plugin 'ervandew/supertab'

Plugin 'easymotion/vim-easymotion'

Plugin 'vim-airline/vim-airline'

Plugin 'yggdroot/indentline'

Plugin 'iamcco/markdown-preview.nvim' 

Plugin 'luochen1990/rainbow'

Plugin 'neoclide/coc.nvim', {'branch': 'release'}

"����
Plugin 'morhetz/gruvbox'


"nerdtree
Plugin 'fholgado/minibufexpl.vim'
Plugin 'wesleyche/SrcExpl'
Plugin 'scrooloose/nerdtree'
Plugin 'jiangmiao/auto-pairs'
" ������в����Ҫ����������֮ǰ
call vundle#end()            " ����
filetype plugin indent on    " ���� ����vim�Դ��Ͳ����Ӧ���﷨���ļ�������ؽű�
" ���Ӳ���ı�����,����ʹ���������:
"filetype plugin on
"
" ���õ�����
" :PluginList       - �г����������õĲ��
" :PluginInstall  	 - ��װ���,׷�� `!` ���Ը��»�ʹ�� :PluginUpdate
" :PluginSearch foo - ���� foo ; ׷�� `!` ������ػ���
" :PluginClean      - ���δʹ�ò��,��Ҫȷ��; ׷�� `!` �Զ���׼�Ƴ�δʹ�ò��
"
" ���� :h vundle ��ȡ����ϸ�ں�wiki�Լ�FAQ
" �����Լ��Էǲ��Ƭ�η�������֮��


"let g:indentLine_setColors = 0
let g:indentLine_color_term = 255
let g:indentLine_bgcolor_gui = '#7fb80e'

"easymotion
let g:EasyMotion_smartcase = 1
nmap ;f <Plug>(easymotion-s2)
nmap ;;f <Plug>(easymotion-overwin-f2)
nmap ;j <Plug>(easymotion-bd-jk)
nmap ;;j <Plug>(easymotion-overwin-line)
nmap ;w <Plug>(easymotion-bd-w)
nmap ;e <Plug>(easymotion-bd-e)
nmap ;a <Plug>(easymotion-jumptoanywhere)

""""""""""""""""""""""""""""""""""""""""""""""
"markdown-preveiw cofigure
" set to 1, nvim will open the preview window after entering the markdown buffer
" default: 0
let g:mkdp_auto_start = 0

" set to 1, the nvim will auto close current preview window when change
" from markdown buffer to another buffer
" default: 1
let g:mkdp_auto_close = 1

" set to 1, the vim will refresh markdown when save the buffer or
" leave from insert mode, default 0 is auto refresh markdown as you edit or
" move the cursor
" default: 0
let g:mkdp_refresh_slow = 0

" set to 1, the MarkdownPreview command can be use for all files,
" by default it can be use in markdown file
" default: 0
let g:mkdp_command_for_global = 0

" set to 1, preview server available to others in your network
" by default, the server listens on localhost (127.0.0.1)
" default: 0
let g:mkdp_open_to_the_world = 0

" use custom IP to open preview page
" useful when you work in remote vim and preview on local browser
" more detail see: https://github.com/iamcco/markdown-preview.nvim/pull/9
" default empty
let g:mkdp_open_ip = ''

" specify browser to open preview page
" default: ''
let g:mkdp_browser = ''

" set to 1, echo preview page url in command line when open preview page
" default is 0
let g:mkdp_echo_preview_url = 0

" a custom vim function name to open preview page
" this function will receive url as param
" default is empty
let g:mkdp_browserfunc = ''

" options for markdown render
" mkit: markdown-it options for render
" katex: katex options for math
" uml: markdown-it-plantuml options
" maid: mermaid options
" disable_sync_scroll: if disable sync scroll, default 0
" sync_scroll_type: 'middle', 'top' or 'relative', default value is 'middle'
"   middle: mean the cursor position alway show at the middle of the preview page
"   top: mean the vim top viewport alway show at the top of the preview page
"   relative: mean the cursor position alway show at the relative positon of the preview page
" hide_yaml_meta: if hide yaml metadata, default is 1
" sequence_diagrams: js-sequence-diagrams options
" content_editable: if enable content editable for preview page, default: v:false
" disable_filename: if disable filename header for preview page, default: 0
let g:mkdp_preview_options = {
    \ 'mkit': {},
    \ 'katex': {},
    \ 'uml': {},
    \ 'maid': {},
    \ 'disable_sync_scroll': 0,
    \ 'sync_scroll_type': 'middle',
    \ 'hide_yaml_meta': 1,
    \ 'sequence_diagrams': {},
    \ 'flowchart_diagrams': {},
    \ 'content_editable': v:false,
    \ 'disable_filename': 0
    \ }

" use a custom markdown style must be absolute path
" like '/Users/username/markdown.css' or expand('~/markdown.css')
let g:mkdp_markdown_css = ''

" use a custom highlight style must absolute path
" like '/Users/username/highlight.css' or expand('~/highlight.css')
let g:mkdp_highlight_css = ''

" use a custom port to start server or random for empty
let g:mkdp_port = ''

" preview page title
" ${name} will be replace with the file name
let g:mkdp_page_title = '��${name}��'

" recognized filetypes
" these filetypes will have MarkdownPreview... commands
let g:mkdp_filetypes = ['markdown']

"mapping
nmap <C-p> <Plug>MarkdownPreview
nmap <C-s> <Plug>MarkdownPreviewStop

"rainbow
let g:rainbow_active = 1 "set to 0 if you want to enable it later via :RainbowToggle


"colorscheme elflord "vim����
set bg=dark
colorscheme gruvbox

"NerdTree####################################################
"ȥ����һ�еİ�����ʾ
let NERDTreeMinimalUI=1
"�����ռ���
let NERDTreeWinSize=28
"��������ʾ������ڵ��ļ�
let NERDTreeHighlightCursorline=0
"��ǰĿ¼���趨
let NERDTreeChDirMode = 2
"�Զ��˳�
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTreeType") &&b:NERDTreeType == "primary") | q | endif
"��vimʱ�Զ���
autocmd vimenter * NERDTree
"<F2>��Ϊtoggle
nmap <F2> :NERDTreeToggle<CR>

"���������䣬��vim��ʱ��ǰ������Nerdtree����
autocmd VimEnter * wincmd l
