import sanitizeHtml from "sanitize-html-react";

const ALLOWED_TAGS = ['b', 'i', 'em', 'strong', 'p', 'italic', 'ol', 'ul', 'li', 'br', 'div'];

export const sanitize = (dangerouslyHTML) =>
  sanitizeHtml(dangerouslyHTML, {
    allowedTags: ALLOWED_TAGS,
  });

