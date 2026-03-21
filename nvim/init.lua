-- ========================================================================== --
-- ==                           GENERAL SETTINGS                           == --
-- ========================================================================== --

vim.g.mapleader = " "
vim.g.maplocalleader = " "

local opt = vim.opt

opt.number = true           -- Show line numbers
opt.relativenumber = false  -- Relative line numbers (set to false per your file)
opt.mouse = "a"             -- Enable mouse support
opt.ignorecase = true       -- Case insensitive searching
opt.smartcase = true        -- ... unless uppercase is used
opt.shiftwidth = 4          -- Size of an indent
opt.tabstop = 4             -- Number of spaces tabs count for
opt.expandtab = true        -- Use spaces instead of tabs
opt.termguicolors = true    -- True color support
opt.cursorline = true       -- Highlight the current line
opt.clipboard = "unnamedplus" -- Sync with system clipboard

-- ========================================================================== --
-- ==                         BOOTSTRAP LAZY.NVIM                          == --
-- ========================================================================== --

local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system({
    "git",
    "clone",
    "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable",
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)

-- ========================================================================== --
-- ==                               PLUGINS                                == --
-- ========================================================================== --

require("lazy").setup({
    -- UI & Theme
    { "catppuccin/nvim", name = "catppuccin", priority = 1000 },
    { "nvim-tree/nvim-web-devicons", lazy = true },
    
    -- Dashboard (The Start Page)
    {
        "goolord/alpha-nvim",
        dependencies = { "nvim-tree/nvim-web-devicons" },
        config = function()
            local alpha = require("alpha")
            local dashboard = require("alpha.themes.dashboard")

            -- Custom "Mares" ASCII Header
            dashboard.section.header.val = {
                [[                                                     ]],
                [[               W E L C O M E   M A R E S .           ]],
                [[                                                     ]],
            }

            -- Menu Buttons
            dashboard.section.buttons.val = {
                dashboard.button("f", "  Find File", ":Telescope find_files<CR>"),
                dashboard.button("n", "  New File", ":ene <BAR> startinsert<CR>"),
                dashboard.button("r", "  Recent Files", ":Telescope oldfiles<CR>"),
                dashboard.button("c", "  Config", ":e $MYVIMRC<CR>"),
                dashboard.button("q", "󰈆  Quit", ":qa<CR>"),
            }

            -- Styling
            dashboard.section.header.opts.hl = "AlphaHeader"
            dashboard.section.buttons.opts.hl = "AlphaButton"
            dashboard.opts.layout[1].val = 8 -- Padding from top
            
            alpha.setup(dashboard.opts)
        end
    },

    -- Fuzzy Finder
    {
        "nvim-telescope/telescope.nvim",
        tag = "0.1.5",
        dependencies = { "nvim-lua/plenary.nvim" }
    },

    -- Syntax Highlighting (FIXED VERSION)
    {
        "nvim-treesitter/nvim-treesitter",
        build = ":TSUpdate",
        opts = {
            ensure_installed = { "lua", "vim", "vimdoc", "javascript", "python" },
            highlight = { enable = true },
        },
        config = function(_, opts)
            -- This protected call prevents the crash if the module is missing
            local status_ok, configs = pcall(require, "nvim-treesitter.configs")
            if not status_ok then return end
            configs.setup(opts)
        end
    },
})

-- ========================================================================== --
-- ==                              KEYMAPS                                 == --
-- ========================================================================== --

local keymap = vim.keymap.set

-- Telescope
keymap("n", "<leader>ff", ":Telescope find_files<CR>", { desc = "Find Files" })
keymap("n", "<leader>fg", ":Telescope live_grep<CR>", { desc = "Grep" })

-- General
keymap("n", "<leader>nh", ":nohl<CR>", { desc = "Clear search highlights" })
keymap("i", "jk", "<ESC>", { desc = "Exit insert mode with jk" })

-- ========================================================================== --
-- ==                                THEME                                 == --
-- ========================================================================== --

vim.cmd.colorscheme("catppuccin-mocha")
