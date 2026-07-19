// ============================================================
// useSearch.js — Custom hook untuk logika pencarian global
// Digunakan oleh SearchOverlay / Navbar
// ============================================================
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { globalContentIndex } from "@/constants/searchIndexData";

/**
 * Semua state, efek, dan handler pencarian global terpusat di sini.
 * Navbar dan komponen lain cukup memanggil hook ini.
 */
export function useSearch() {
  const [searchOpen, setSearchOpen]   = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef                = useRef(null);
  const navigate                      = useNavigate();

  // ── Autofocus & reset query ──
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setSearchQuery("");
    }
  }, [searchOpen]);

  // ── Escape key menutup panel ──
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setSearchOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ── Filter hasil (min 2 karakter, maks 7 hasil) ──
  const searchResults =
    searchQuery.trim().length >= 2
      ? globalContentIndex
          .filter(({ title, category, keywords }) => {
            const q = searchQuery.toLowerCase();
            return (
              title.toLowerCase().includes(q) ||
              category.toLowerCase().includes(q) ||
              keywords.toLowerCase().includes(q)
            );
          })
          .slice(0, 7)
      : [];

  const openSearch  = ()        => setSearchOpen(true);
  const closeSearch = ()        => setSearchOpen(false);

  const navigateTo  = (path) => {
    navigate(path);
    setSearchOpen(false);
    setSearchQuery("");
  };

  const submitSearch = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) navigateTo(searchResults[0].path);
  };

  return {
    searchOpen,
    searchQuery,
    setSearchQuery,
    searchResults,
    searchInputRef,
    openSearch,
    closeSearch,
    navigateTo,
    submitSearch,
  };
}
